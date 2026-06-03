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

          <p className="mt-5 text-lg sm:text-xl font-prompt-regular leading-[1.18] text-[#b8dcea] text-center lg:text-left">
            A LITTLE ABOUT ME 
          </p>

          <p className="mt-8 text-base sm:text-lg font-prompt-regular leading-[1.35] text-[#9d2f2d] text-center lg:text-left">
            Hi, I’m Gabryel, a Filipino Information Technology student based in New Zealand. I moved here five years ago and have been building my future through both study and real-world experience while completing my Bachelor of Information Technology.
          </p>

          <p className="mt-6 text-base sm:text-lg font-prompt-regular leading-[1.35] text-[#9d2f2d] text-center lg:text-left">
            I’m passionate about creating technology that is practical, user-focused, and meaningful. I work across networking, web development, and UI/UX design, and I enjoy turning ideas into clean, functional digital experiences.
          </p>

          <p className="mt-6 text-base sm:text-lg font-prompt-regular leading-[1.35] text-[#9d2f2d] text-center lg:text-left">
            Alongside my studies, I work as an Audiology Clinic Manager at Specsavers, which has helped me develop strong leadership, communication, and problem-solving skills. Across everything I do, one mindset stays consistent: people come first. That principle shapes how I design, build, and solve problems.
          </p>

          <p className="mt-6 text-base sm:text-lg font-prompt-regular leading-[1.35] text-[#9d2f2d] text-center lg:text-left">
            If you’re looking for someone driven, creative, and focused on impact, let’s work together.
          </p>

          <button
            className="mt-10 block w-fit rounded-full bg-[#ff97b6] px-6 py-2 text-base font-corben-regular text-black transition hover:bg-[#ea7fa6] mx-auto lg:inline-block lg:mx-0"
            type="button"
            onClick={() => window.dispatchEvent(new Event('openContactModal'))}
          >
            Let's Chat!
          </button>
        </div>

        <div className="mx-auto flex w-full max-w-[300px] origin-center rotate-[-3deg] flex-col items-center bg-[#fdade3] p-4 shadow-lg sm:max-w-[360px] md:max-w-[390px] lg:max-w-[360px]">
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
