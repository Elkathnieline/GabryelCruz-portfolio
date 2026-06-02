export default function GalleryHeader() {
  return (
    <header className="w-full bg-[#ffd5ec]">
      <div className="mx-auto max-w-7xl py-12 text-center px-4 sm:py-16">
        <h2 className="font-vampiro-one text-4xl sm:text-5xl md:text-6xl text-[#9d2f2d] leading-none">
          things i've worked on
        </h2>
      </div>

      <div aria-hidden className="w-full">
        <div className="flex w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-12 sm:h-16 md:h-20 ${i % 2 === 0 ? 'bg-white' : 'bg-[#cfe8f4]'}`}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
