import FlowerElement from './FlowerElement';
import CameraElement from './CameraElement';
import CatElement from './CatElement';
import CactusElement from './CactusElement';
import checkbg from '../../../images/checkbg.png';

const sectionClass = 'relative w-full overflow-hidden bg-white px-3 py-6 sm:px-6 md:py-8';

const sectionStyle = {
  backgroundImage: `url(${checkbg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const containerClass =
  'relative mx-auto flex w-full max-w-[1280px] flex-1 items-center justify-center';

function HeroContent({ onScroll }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-4 text-center sm:gap-6">
      <h1 className="flex max-w-[20ch] flex-col items-center gap-1 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-prompt-regular leading-[0.95] tracking-[-0.04em] text-[#a6463f] sm:gap-2">
        <span>building technology, creativity,</span>
        <span>and connection into</span>
        <span>everything i do.</span>
      </h1>
      <button
        className="mt-4 rounded-full bg-[#ff97b6] px-6 py-2 text-sm font-corben-regular text-white shadow-none transition hover:bg-[#f47faa] sm:mt-5 sm:text-base"
        onClick={onScroll}
      >
        Scroll down
      </button>
    </div>
  );
}

export default function HeroSection() {
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className={sectionClass} style={sectionStyle}>
      <div className={containerClass} style={{ minHeight: 'calc(100svh - 4rem)' }}>
        <div className="absolute left-[5%] top-[18%] w-[92px] drop-shadow-[0_8px_10px_rgba(0,0,0,0.08)] sm:left-[10%] sm:w-[118px] md:left-[8%] md:top-[16%] md:w-[140px] lg:left-[18%] lg:w-[170px]">
          <CatElement />
        </div>
        <div className="absolute right-[6%] top-[16%] w-[60px] drop-shadow-[0_8px_10px_rgba(0,0,0,0.08)] sm:right-[10%] sm:w-[80px] md:right-[8%] md:top-[14%] md:w-[92px] lg:right-[18%] lg:w-[126px]">
          <FlowerElement />
        </div>
        <div className="absolute bottom-[25%] left-[6%] w-[96px] drop-shadow-[0_8px_10px_rgba(0,0,0,0.08)] sm:left-[10%] sm:w-[124px] md:bottom-[20%] md:left-[8%] md:w-[145px] lg:left-[18%] lg:w-[180px]">
          <CameraElement />
        </div>
        <div className="absolute bottom-[18%] right-[9%] w-[56px] drop-shadow-[0_8px_10px_rgba(0,0,0,0.08)] sm:right-[13%] sm:w-[72px] md:bottom-[14%] md:right-[10%] md:w-[84px] lg:right-[21%] lg:w-[112px]">
          <CactusElement />
        </div>

        <HeroContent onScroll={handleScrollDown} />
      </div>
    </section>
  );
}
