"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="6" y="5" width="4" height="14" />
      <rect x="14" y="5" width="4" height="14" />
    </svg>
  );
}

function VolumeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function MuteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

const TRACK = {
  src: "/audio/song1.mp3",
  cover: "/audio/song1.jpg",
  title: "ถ้าฉันเป็นเขา",
  artist: "INDIGO",
};

const START_SECONDS = 60;

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [volume, setVolume] = useState(0.6);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.muted = muted;
  }, [volume, muted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      if (audio.currentTime < START_SECONDS) {
        audio.currentTime = START_SECONDS;
      }
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  const handleDiscClick = () => {
    if (expanded) {
      togglePlay();
    } else {
      setExpanded(true);
    }
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <audio
        ref={audioRef}
        src={TRACK.src}
        onLoadedMetadata={(e) => {
          e.currentTarget.currentTime = START_SECONDS;
        }}
        onEnded={(e) => {
          e.currentTarget.currentTime = START_SECONDS;
          e.currentTarget.play().catch(() => {});
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div
        className={`flex items-center gap-3 rounded-full border border-white/15 bg-black/70 shadow-2xl backdrop-blur-md transition-all duration-300 ease-out ${
          expanded ? "py-2 pr-4 pl-2" : "p-1"
        }`}
      >
        <button
          type="button"
          onClick={handleDiscClick}
          aria-label={
            expanded ? (isPlaying ? "Pause music" : "Play music") : "Show music player"
          }
          className="group relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/20"
        >
          <Image
            src={TRACK.cover}
            alt={`${TRACK.title} — ${TRACK.artist} cover art`}
            fill
            sizes="48px"
            className="animate-[spin_8s_linear_infinite] object-cover"
            style={{ animationPlayState: isPlaying ? "running" : "paused" }}
          />
          <span className="absolute inset-0 m-auto h-2 w-2 rounded-full border border-white/40 bg-black" />
          {expanded && (
            <span className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {isPlaying ? (
                <PauseIcon className="h-4 w-4 text-white" />
              ) : (
                <PlayIcon className="h-4 w-4 text-white" />
              )}
            </span>
          )}
        </button>

        {expanded && (
          <>
            <div className="flex min-w-0 flex-col leading-tight">
              <span className="max-w-28 truncate text-xs font-medium text-white">
                {TRACK.title}
              </span>
              <span className="truncate text-[10px] text-zinc-500">{TRACK.artist}</span>
            </div>

            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Unmute" : "Mute"}
              className="shrink-0 text-zinc-400 transition-colors hover:text-white"
            >
              {muted || volume === 0 ? (
                <MuteIcon className="h-4 w-4" />
              ) : (
                <VolumeIcon className="h-4 w-4" />
              )}
            </button>

            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={muted ? 0 : volume}
              onChange={(e) => {
                setVolume(Number(e.target.value));
                setMuted(false);
              }}
              aria-label="Volume"
              className="h-1 w-16 shrink-0 cursor-pointer accent-white"
            />

            <button
              type="button"
              onClick={() => setExpanded(false)}
              aria-label="Hide player"
              className="shrink-0 text-zinc-400 transition-colors hover:text-white"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
