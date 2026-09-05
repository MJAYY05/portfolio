export default function NameHover() {
  return (
    <div className="group relative inline-block cursor-default select-none">
      <h1 className="font-kanit text-3xl font-semibold leading-[1.05] tracking-tight text-white transition-opacity duration-500 ease-out group-hover:opacity-0 sm:text-4xl">
        Thanakorn
        <br />
        Jamnongprakhon
      </h1>
      <h1 className="font-kanit pointer-events-none absolute inset-0 text-3xl font-semibold leading-[1.05] tracking-tight text-white opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 sm:text-4xl">
        ธนกร
        <br />
        จำนงประโคน
      </h1>
    </div>
  );
}
