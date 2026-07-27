"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const CITY_LENGTH = 290;
const BUILDING_COUNT = 150;

function seededRandom(seed: number) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

export default function SiteBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.021);

    const camera = new THREE.PerspectiveCamera(54, 1, 0.1, 170);
    camera.position.set(0, 6.4, 16);

    const random = seededRandom(2026);
    const buildingGeometry = new THREE.BoxGeometry(1, 1, 1);
    const buildingMaterial = new THREE.MeshStandardMaterial({
      color: 0x050505,
      emissive: 0x090909,
      metalness: 0.72,
      roughness: 0.42,
    });
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.12,
      wireframe: true,
      depthWrite: false,
    });
    const buildings = new THREE.InstancedMesh(
      buildingGeometry,
      buildingMaterial,
      BUILDING_COUNT,
    );
    const wireBuildings = new THREE.InstancedMesh(
      buildingGeometry,
      wireMaterial,
      BUILDING_COUNT,
    );
    const matrix = new THREE.Matrix4();

    const windowPositions: number[] = [];
    const beaconPositions: number[] = [];

    for (let index = 0; index < BUILDING_COUNT; index += 1) {
      const side = index % 2 === 0 ? -1 : 1;
      const lane = Math.floor(index / 2) % 3;
      const width = 2.2 + random() * 4.6;
      const depth = 3.2 + random() * 7;
      const height = 3.5 + Math.pow(random(), 0.55) * 21;
      const x =
        side *
        (7.5 + lane * 5.2 + random() * 2.6 + (height > 18 ? 1.6 : 0));
      const z = 11 - (index / BUILDING_COUNT) * CITY_LENGTH - random() * 5;
      const y = height / 2 - 0.45;

      matrix.compose(
        new THREE.Vector3(x, y, z),
        new THREE.Quaternion(),
        new THREE.Vector3(width, height, depth),
      );
      buildings.setMatrixAt(index, matrix);
      wireBuildings.setMatrixAt(index, matrix);

      const windowRows = Math.max(2, Math.floor(height / 3));
      for (let row = 1; row < windowRows; row += 2) {
        const windowY = row * 2.45;
        if (windowY > height - 0.8) break;
        windowPositions.push(
          x - side * (width / 2 + 0.025),
          windowY,
          z - depth * 0.25,
        );
        windowPositions.push(
          x - side * (width / 2 + 0.025),
          windowY,
          z + depth * 0.25,
        );
      }

      if (height > 17 && random() > 0.42) {
        beaconPositions.push(x, height + 0.45, z);
      }
    }

    buildings.instanceMatrix.needsUpdate = true;
    wireBuildings.instanceMatrix.needsUpdate = true;
    scene.add(buildings, wireBuildings);

    const windowsGeometry = new THREE.BufferGeometry();
    windowsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(windowPositions, 3),
    );
    const windowsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.12,
      transparent: true,
      opacity: 0.62,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const windows = new THREE.Points(windowsGeometry, windowsMaterial);
    scene.add(windows);

    const beaconGeometry = new THREE.BufferGeometry();
    beaconGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(beaconPositions, 3),
    );
    const beaconMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.28,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const beacons = new THREE.Points(beaconGeometry, beaconMaterial);
    scene.add(beacons);

    const grid = new THREE.GridHelper(
      330,
      110,
      new THREE.Color(0x4a4a4a),
      new THREE.Color(0x171717),
    );
    grid.position.set(0, -0.42, -135);
    scene.add(grid);

    const roadLinePositions: number[] = [];
    for (const x of [-5.1, -4.65, 0, 4.65, 5.1]) {
      roadLinePositions.push(x, -0.34, 20, x, -0.34, -CITY_LENGTH);
    }
    for (let z = 10; z > -CITY_LENGTH; z -= 12) {
      roadLinePositions.push(-4.65, -0.33, z, 4.65, -0.33, z);
    }
    const roadGeometry = new THREE.BufferGeometry();
    roadGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(roadLinePositions, 3),
    );
    const roadMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.32,
    });
    scene.add(new THREE.LineSegments(roadGeometry, roadMaterial));

    const gateMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.26,
    });
    const gates = new THREE.Group();
    for (let z = -40; z > -CITY_LENGTH; z -= 55) {
      const points = [
        new THREE.Vector3(-5.2, 0, z),
        new THREE.Vector3(-5.2, 8, z),
        new THREE.Vector3(5.2, 8, z),
        new THREE.Vector3(5.2, 0, z),
      ];
      gates.add(
        new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(points),
          gateMaterial,
        ),
      );
    }
    scene.add(gates);

    scene.add(new THREE.AmbientLight(0xffffff, 0.42));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(-12, 24, 10);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0xffffff, 38, 90, 1.8);
    rimLight.position.set(0, 9, -18);
    scene.add(rimLight);

    const pointer = new THREE.Vector2();
    let scrollProgress = 0;
    let smoothScroll = 0;
    let frameId = 0;
    let isVisible = true;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const updatePointer = (event: PointerEvent) => {
      if (reducedMotion || event.pointerType === "touch") return;
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const updateScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, width < 768 ? 1.15 : 1.6),
      );
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        frameId = requestAnimationFrame(render);
      }
    };

    const clock = new THREE.Clock();
    const render = () => {
      if (!isVisible) return;

      const delta = Math.min(clock.getDelta(), 0.05);
      const smoothing = reducedMotion ? 1 : 1 - Math.pow(0.001, delta);
      smoothScroll += (scrollProgress - smoothScroll) * smoothing;

      const targetZ = 16 - smoothScroll * 245;
      const targetX = reducedMotion ? 0 : pointer.x * 1.65;
      const targetY = 6.4 + (reducedMotion ? 0 : -pointer.y * 0.72);
      camera.position.x += (targetX - camera.position.x) * 0.035;
      camera.position.y += (targetY - camera.position.y) * 0.035;
      camera.position.z += (targetZ - camera.position.z) * 0.045;
      camera.lookAt(
        camera.position.x * 0.18,
        2.2 - smoothScroll * 0.25,
        camera.position.z - 27,
      );

      const pulse = 0.58 + Math.sin(clock.elapsedTime * 1.6) * 0.16;
      beaconMaterial.opacity = pulse;
      rimLight.position.z = camera.position.z - 28;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(render);
    };

    resize();
    updateScroll();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
      document.removeEventListener("visibilitychange", handleVisibility);

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      windowsGeometry.dispose();
      windowsMaterial.dispose();
      beaconGeometry.dispose();
      beaconMaterial.dispose();
      roadGeometry.dispose();
      roadMaterial.dispose();
      gateMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black"
    >
      <canvas ref={canvasRef} className="h-full w-full opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(0,0,0,0.2)_55%,rgba(0,0,0,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18),rgba(0,0,0,0.42))]" />
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:100%_4px]" />
    </div>
  );
}
