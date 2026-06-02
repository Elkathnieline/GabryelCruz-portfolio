import hi1 from '../../../images/hi1.JPEG';
import hi2 from '../../../images/hi2.JPEG';

export default function Intro() {
  return (
    <section className="bg-[#fffbf5] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:flex-row lg:gap-16 lg:px-8">
        <div className="flex flex-1 flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-prompt-regular leading-none text-[#9d2f2d] text-center lg:text-left">
            I'm Gabryel!
          </h2>

          <p className="mt-5 text-2xl sm:text-3xl font-prompt-regular leading-[1.18] text-[#b8dcea] text-center lg:text-left">
            lorem ipsum lorem
            <br />
            upsum lorem ipsum
          </p>

          <p className="mt-8 text-base sm:text-lg font-prompt-regular leading-[1.35] text-[#9d2f2d] text-center lg:text-left">
            Lorem ipsum lorem ipsum Lorem ipsum
            <br />
            lorem ipsum Lorem ipsum lorem ipsum
            <br />
            Lorem ipsum lorem ipsum Lorem ipsum
            <br />
            lorem ipsum Lorem ipsum lorem ipsum
            <br />
            Lorem ipsum lorem ipsum Lorem ipsum
            <br />
            lorem ipsum Lorem ipsum lorem ipsum
            <br />
            Lorem ipsum lorem ipsum Lorem ipsum
            <br />
            lorem ipsum Lorem ipsum lorem ipsum
          </p>


          <p className="mt-8 text-base sm:text-lg font-prompt-regular leading-[1.35] text-[#9d2f2d] text-center lg:text-left">
            Lorem ipsum lorem ipsum Lorem ipsum
            <br />
            lorem ipsum Lorem ipsum lorem ipsum
            <br />
            Lorem ipsum lorem ipsum Lorem ipsum
            <br />
            lorem ipsum Lorem ipsum lorem ipsum
            <br />
            Lorem ipsum lorem ipsum Lorem ipsum
            <br />
            lorem ipsum Lorem ipsum lorem ipsum
            <br />
            Lorem ipsum lorem ipsum Lorem ipsum
            <br />
            lorem ipsum Lorem ipsum lorem ipsum
          </p>

          <button className="mt-10 block w-fit rounded-full bg-[#ff97b6] px-6 py-2 text-base font-corben-regular text-black transition hover:bg-[#ea7fa6] mx-auto lg:inline-block lg:mx-0">
            Let's Chat!
          </button>
        </div>

        <div className="mx-auto flex w-full max-w-[300px] flex-col items-center bg-[#fdade3] p-4 sm:max-w-[360px] md:max-w-[390px] lg:max-w-[360px]">
          <div className="flex w-full flex-col gap-2">
            <img src={hi1} alt="Intro 1" className="h-auto w-full rounded-lg object-cover" />
            <img src={hi2} alt="Intro 2" className="h-auto w-full rounded-lg object-cover" />
          </div>
          <p className="mt-6 text-center font-corben-regular text-[#9d2f2d] text-lg">
            nice to meet you!
          </p>
        </div>
      </div>
    </section>
  );
}
