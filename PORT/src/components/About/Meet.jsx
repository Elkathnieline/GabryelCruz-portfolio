import frame from '../../../images/frame.png';
import meet from '../../../images/meet.JPG';

export default function Meet() {
  return (
    <section className="bg-[#fffbf5] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center">
          <h2 className="font-vampiro-one text-6xl sm:text-7xl lg:text-8xl leading-none text-[#9d2f2d]">
            meet gabryel
          </h2>

          <p className="mx-auto mt-6 max-w-5xl font-montserrat-light text-base sm:text-lg leading-[1.35] text-[#9d2f2d] sm:mt-8">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
            <br className="hidden sm:block" />
            ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-[minmax(300px,360px)_minmax(0,1fr)] lg:items-start lg:gap-12 xl:gap-16 lg:pl-12 xl:pl-28">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[330px] rotate-[-4deg] overflow-visible sm:max-w-[390px] md:max-w-[440px] lg:mx-auto lg:max-w-[490px]">
            <div className="absolute inset-[13%] z-0 overflow-hidden sm:inset-[12.5%] md:inset-[12%] lg:inset-[11.5%]">
              <img
                src={meet}
                alt="Meet Gabryel"
                className="h-full w-full object-cover"
              />
            </div>
            <img
              src={frame}
              alt="Decorative frame"
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[175%] w-[175%] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.12)]"
            />
          </div>

          <div className="text-center lg:text-left lg:pl-4 xl:pl-12">
            <h3 className="font-corben-regular text-2xl sm:text-3xl leading-[1.08] text-[#9d2f2d]">
              Lorem ipsum lorem ipsum
              <br />
              lorem ipsum lorem
            </h3>

            <p className="mx-auto mt-8 max-w-[34rem] font-montserrat-light text-sm sm:text-base leading-[1.35] text-[#9d2f2d] lg:mx-0 lg:max-w-[26rem]">
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
              <br />
              lorem ipsum lorem ipsum Lorem ipsum
              <br />
              lorem ipsum lorem ipsum lorem ipsum
              <br />
              Lorem ipsum lorem ipsum lorem ipsum
              <br />
              lorem ipsum
            </p>

            <p className="mt-10 font-corben-regular text-base sm:text-lg leading-[1.25] text-[#9d2f2d]">
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}