import wavylinebg from '../../../images/wavylinebg.png';

export default function AboutHeader() {
  const buttonClass =
    'w-[130px] rounded-full bg-[#ff97b6] px-4 py-2 font-corben-regular text-sm text-[#ffffff] transition hover:bg-[#ff84b0] sm:w-[145px] sm:text-sm md:w-[160px] md:px-5 md:py-2.5 md:text-base lg:w-[160px] lg:px-5 lg:py-2.5 lg:text-base xl:w-[300px] xl:px-8 xl:py-3 xl:text-lg';
  const buttons = ['Shop now', 'Shop now'];

  const sectionStyle = {
    backgroundImage: `url(${wavylinebg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="relative overflow-hidden bg-[#d6edf8] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20" style={sectionStyle}>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="w-full max-w-2xl text-center lg:max-w-none lg:flex-1 lg:text-left">
          <h1 className="font-corben-regular text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-[#9d2f2d]">
            <span>The </span>
            <span>DESIGNER </span>
            <span className="font-vampiro-one text-[0.82em] normal-case">behind</span>
            <br />
            <span>BEYOND </span>
            <span className="font-vampiro-one text-[0.82em] normal-case">the</span>
            <span> STUDIO</span>
          </h1>

          <div className="mt-10 flex items-center justify-center gap-3 lg:justify-start">
            {buttons.map((label, index) => (
              <button key={`${label}-${index}`} className={buttonClass}>
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto h-[240px] w-full max-w-[280px] rounded-[56px] bg-white sm:h-[300px] sm:max-w-[330px] md:h-[360px] md:max-w-[360px] lg:mx-0 lg:h-[500px] lg:max-w-[420px]" />
      </div>
    </section>
  );
}