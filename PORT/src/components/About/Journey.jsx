export default function Journey() {
  const timelineItems = [
    {
      year: '2023',
      title: 'lorem',
      text: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum',
    },
    {
      year: '2024',
      title: 'lorem',
      text: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum',
    },
    {
      year: '2025',
      title: 'lorem',
      text: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum',
    },
    {
      year: 'Now',
      title: 'lorem',
      text: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum',
    },
  ];

  return (
    <section className="bg-[#ffd5ec] px-6 py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-prompt-regular text-4xl md:text-5xl text-[#9d2f2d] mb-12">
          My <span className="font-corben-regular text-[#9d2f2d]">JOURNEY</span> <span className="text-3xl md:text-4xl font-vampiro-one">(so far)</span>
        </h2>

        <div className="relative">
          {/* Center timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#8B3A62] transform -translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              const imageClass = 'h-[160px] w-[160px] sm:h-[180px] sm:w-[180px] md:h-[220px] md:w-[200px] lg:h-[300px] lg:w-[260px] xl:h-[340px] xl:w-[300px] rounded-lg bg-white flex-shrink-0';

              return (
                <div key={index} className={`flex flex-col items-center gap-6 md:gap-0 relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Image - alternates sides; larger on lg/xl and slightly closer to the center */}
                  <div className={`w-full md:w-1/2 flex justify-center ${isEven ? 'md:justify-start md:pl-12' : 'md:justify-end md:pr-6'}`}>
                    <div className={imageClass} />
                  </div>

                  {/* Center - Year and timeline dot */}
                  <div className={`flex flex-col md:absolute md:left-1/2 md:top-0 items-center z-20 ${isEven ? 'md:flex-row md:pl-8' : 'md:flex-row-reverse md:-translate-x-full md:pr-8'}`}>
                    <div className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 rounded-full bg-[#8B3A62] ring-2 md:ring-4 ring-[#ffc0d9] relative z-10 flex-shrink-0" />
                    <span className={`mt-2 md:mt-0 text-xl sm:text-2xl md:text-4xl font-prompt-bold text-[#9d2f2d] whitespace-nowrap ${isEven ? 'md:ml-3' : 'md:mr-3'}`}>
                      {item.year}
                    </span>
                  </div>

                  {/* Text content - alternates sides */}
                  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:pl-12">
                    <h3 className="font-vampiro-one text-2xl md:text-3xl text-[#9d2f2d] italic">{item.title}</h3>
                    <p className="mt-2 font-montserrat-light text-sm md:text-base text-[#9d2f2d] text-center md:text-left max-w-md">{item.text}</p>
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
