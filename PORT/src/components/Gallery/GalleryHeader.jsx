import checkbg from '../../assets/images/checkbg.png';

export default function GalleryHeader() {
  const stripStyle = {
    backgroundImage: `url(${checkbg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <header className="w-full bg-[#ffd5ec]">
      <div className="mx-auto max-w-7xl py-12 text-center px-4 sm:py-16">
        <h2 className="font-vampiro-one text-4xl sm:text-5xl md:text-6xl text-[#9d2f2d] leading-none">
          things i've worked on
        </h2>
      </div>

      <div aria-hidden className="w-full">
        <div className="h-12 w-full sm:h-16 md:h-20" style={stripStyle} />
      </div>
    </header>
  );
}
