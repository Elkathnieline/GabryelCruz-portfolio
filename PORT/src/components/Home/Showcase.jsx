import { Link } from 'react-router-dom';
import wavylinebg from '../../assets/images/wavylinebg.png';
import showcase1 from '../../assets/images/showcase1.JPG';
import showcase2 from '../../assets/images/showcase2.JPG';
import showcase3 from '../../assets/images/showcase3.JPG';

export default function Showcase() {
  const sectionStyle = {
    backgroundImage: `url(${wavylinebg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="relative overflow-hidden bg-[#cfe8f4] py-12 sm:py-16 md:py-20" style={sectionStyle}>
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center px-4 sm:px-6">
        <div className="grid w-full grid-cols-1 justify-items-center gap-5 lg:grid-cols-3 lg:gap-8 xl:gap-6">
          <img src={showcase2} alt="Showcase 1" className="mx-auto h-[250px] w-[220px] rounded-[36px] object-cover shadow-[0_12px_24px_rgba(0,0,0,0.06)] sm:h-[290px] sm:w-[255px] md:h-[330px] md:w-[290px] lg:h-[340px] lg:w-[304px] xl:h-[400px] xl:w-[360px]" />
          <img src={showcase1} alt="Showcase 2" className="mx-auto h-[250px] w-[220px] rounded-[36px] object-cover shadow-[0_12px_24px_rgba(0,0,0,0.06)] sm:h-[290px] sm:w-[255px] md:h-[330px] md:w-[290px] lg:h-[340px] lg:w-[304px] lg:-translate-y-6 xl:h-[400px] xl:w-[360px]" />
          <img src={showcase3} alt="Showcase 3" className="mx-auto h-[250px] w-[220px] rounded-[36px] object-cover shadow-[0_12px_24px_rgba(0,0,0,0.06)] sm:h-[290px] sm:w-[255px] md:h-[330px] md:w-[290px] lg:h-[340px] lg:w-[304px] xl:h-[400px] xl:w-[360px]" />
        </div>

        <div className="mt-8 text-center md:mt-10">
          <h3 className="text-4xl sm:text-5xl md:text-5xl font-vampiro-one leading-none tracking-[-0.04em] text-[#9d2f2d]">
            Interests
          </h3>
          <p className="mt-4 text-sm font-corben-regular text-[#9d2f2d] sm:text-base">
            I’m passionate about networking, web development, UI/UX design, and game development.
            <br />
            I enjoy building systems that connect people and creating clean, functional websites.
            <br />
            I also love game development because it blends creativity with problem-solving.
          </p>
          <Link className="mt-8 inline-block rounded-lg bg-[#9d2f2d] px-6 py-2.5 text-sm font-corben-regular text-white transition hover:bg-[#8f3d35]" to="/gallery">
            View my projects
          </Link>
        </div>
      </div>
    </section>
  );
}