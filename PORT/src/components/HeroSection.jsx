import FlowerElement from './FlowerElement';
import CameraElement from './CameraElement';
import CatElement from './CatElement';
import CactusElement from './CactusElement';

export default function HeroSection() {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative flex-1 overflow-hidden bg-white bg-[linear-gradient(45deg,_#c8e4f7_25%,_transparent_25%,_transparent_75%,_#c8e4f7_75%,_#c8e4f7),linear-gradient(45deg,_#c8e4f7_25%,_transparent_25%,_transparent_75%,_#c8e4f7_75%,_#c8e4f7)] bg-[position:0_0,80px_80px] bg-[size:160px_160px] px-3 py-6 sm:bg-[position:0_0,70px_70px] sm:bg-[size:140px_140px] sm:px-6 md:bg-[position:0_0,80px_80px] md:bg-[size:160px_160px] md:py-8">
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-[1280px] items-center justify-center md:min-h-[calc(100svh-4.5rem)]">
        <div className="absolute left-[5%] top-[18%] w-[92px] drop-shadow-[0_8px_10px_rgba(0,0,0,0.08)] sm:left-[10%] sm:w-[118px] md:left-[14%] md:w-[150px] lg:left-[18%] lg:w-[170px]">
          <CatElement />
        </div>
        <div className="absolute right-[6%] top-[16%] w-[72px] drop-shadow-[0_8px_10px_rgba(0,0,0,0.08)] sm:right-[10%] sm:w-[96px] md:right-[14%] md:w-[120px] lg:right-[18%] lg:w-[150px]">
          <FlowerElement />
        </div>
        <div className="absolute bottom-[25%] left-[6%] w-[96px] drop-shadow-[0_8px_10px_rgba(0,0,0,0.08)] sm:left-[10%] sm:w-[124px] md:left-[14%] md:w-[160px] lg:left-[18%] lg:w-[180px]">
          <CameraElement />
        </div>
        <div className="absolute bottom-[18%] right-[9%] w-[44px] drop-shadow-[0_8px_10px_rgba(0,0,0,0.08)] sm:right-[13%] sm:w-[56px] md:right-[17%] md:w-[72px] lg:right-[21%] lg:w-[90px]">
          <CactusElement />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-4 text-center sm:gap-6">
          <h1 className="flex flex-col items-center gap-1 text-[clamp(2.25rem,6vw,3.75rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[#a6463f] sm:gap-2">
            <span>welcome to my</span>
            <span>portfolio</span>
            <span>website</span>
          </h1>
          <button
            className="rounded-full bg-[#f78fb6] px-6 py-3 text-sm font-medium text-[#2d1e1c] shadow-none transition hover:bg-[#f47faa] sm:text-base"
            onClick={handleScrollDown}
          >
            Shop now
          </button>
        </div>
      </div>
    </section>
  )
}
