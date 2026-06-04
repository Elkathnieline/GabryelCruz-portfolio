import image2023 from '../../assets/images/2023.JPG';
import image2024 from '../../assets/images/2024.JPG';
import image2025 from '../../assets/images/2025.jpg';
import image2026 from '../../assets/images/2026.JPG';

export default function Journey() {
  const timelineItems = [
    {
      year: '2023',
      image: image2023,
      title: 'Started My IT Journey',
      text: "2023 marked the beginning of my Information Technology journey. While starting university, I also joined Starbucks New Zealand, where I developed strong customer service, teamwork, and communication skills which led to me becoming Keyholder. Learning how to balance study, work, and personal responsibilities taught me resilience and discipline that continue to guide me today.",
    },
    {
      year: '2024',
      image: image2024,
      title: 'Starbucks NZ Latte Art Champion',
      text: 'What began as a part-time job became an opportunity to challenge myself creatively. In 2024, I was proud to be crowned the Starbucks New Zealand Latte Art Champion. This achievement reinforced the importance of patience, consistency, and attention to detail which are qualities that continue to influence my work in both technology and leadership.',
    },
    {
      year: '2025',
      image: image2025,
      title: 'Stepping Into Leadership',
      text: "As university became more demanding, I also stepped into a new role as Audiology Clinic Manager at Specsavers. Leading a clinic while studying full-time strengthened my skills in communication, problem-solving, organisation, and team leadership. In 2025, I also explored modelling, which gave me a new creative outlet and helped me build confidence. This chapter taught me that growth often happens when you're willing to embrace challenges outside your comfort zone.",
    },
    {
      year: 'Today',
      image: image2026,
      title: "Preparing for What's Next",
      text: "As I approach the completion of my Information Technology degree, I'm excited about the opportunities ahead. I continue to grow my skills in networking, web development, UI/UX design, and software development while combining my technical knowledge with real-world leadership experience. The goal is simple: Build technology that creates meaningful experiences for people.",
    },
  ];

  return (
    <section className="bg-[#ffd5ec] px-6 py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-prompt-regular text-4xl md:text-5xl text-[#9d2f2d] mb-12">
          My <span className="font-corben-regular text-[#9d2f2d]">JOURNEY</span> <span className="text-3xl md:text-4xl font-vampiro-one">(so far)</span>
        </h2>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#8B3A62] transform -translate-x-1/2" />

          <div className="space-y-16 lg:space-y-24">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              const imageClass = 'h-[160px] w-[160px] sm:h-[180px] sm:w-[180px] md:h-[220px] md:w-[200px] lg:h-[300px] lg:w-[260px] xl:h-[340px] xl:w-[300px] rounded-lg bg-white flex-shrink-0';
              let textColumnClass = 'w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-12';
              let textMaxWidthClass = 'max-w-md';

              if (item.year === '2025') {
                textColumnClass = 'w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-20 xl:pl-24';
                textMaxWidthClass = 'max-w-lg';
              }

              return (
                <div key={item.year} className={`flex flex-col items-center gap-6 lg:gap-0 relative ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-1/2 flex justify-center ${isEven ? 'lg:justify-start lg:pl-12' : 'lg:justify-end lg:pr-6'}`}>
                    <div className={imageClass}>
                      <img src={item.image} alt={`${item.year} journey`} className="h-full w-full rounded-lg object-cover" />
                    </div>
                  </div>

                  <div className={`flex flex-col lg:absolute lg:left-1/2 lg:top-0 items-center z-20 ${isEven ? 'lg:flex-row lg:pl-8' : 'lg:flex-row-reverse lg:-translate-x-full lg:pr-8'}`}>
                    <div className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 rounded-full bg-[#8B3A62] ring-2 md:ring-4 ring-[#ffc0d9] relative z-10 flex-shrink-0" />
                    <span className={`mt-2 lg:mt-0 text-xl sm:text-2xl md:text-4xl font-prompt-bold text-[#9d2f2d] whitespace-nowrap ${isEven ? 'lg:ml-3' : 'lg:mr-3'}`}>
                      {item.year}
                    </span>
                  </div>

                  <div className={textColumnClass}>
                    <h3 className="font-vampiro-one text-xl md:text-2xl text-[#9d2f2d] italic">{item.title}</h3>
                    <p className={`mt-2 font-montserrat-light text-sm md:text-base text-[#9d2f2d] text-center lg:text-left ${textMaxWidthClass}`}>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
