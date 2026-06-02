import { useEffect, useState } from 'react';

function Tile({ item, index, onOpen }) {
  return (
    <figure className="flex flex-col items-center">
      <button
        type="button"
        onClick={() => onOpen(index)}
        className="w-full max-w-[320px] aspect-square rounded-[8px] shadow-sm overflow-hidden transform transition-transform duration-200 hover:scale-105 focus:outline-none"
        style={{ backgroundColor: item.color }}
        aria-label={`Open ${item.title} ${item.id}`}
      />

      <figcaption className="mt-4 font-corben-regular text-sm tracking-wide text-[#9d2f2d] uppercase">
        {item.title}
      </figcaption>
    </figure>
  );
}

function Modal({ items, activeIndex, onClose, onPrev, onNext }) {
  if (activeIndex === null) return null;

  const item = items[activeIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 max-w-4xl w-full px-4">
        <div className="mx-auto bg-white rounded-md shadow-lg overflow-hidden">
          <div className="relative">
            <div className="w-full aspect-[4/3]" style={{ backgroundColor: item.color }} />

            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 rounded-full bg-white/90 p-2 shadow hover:opacity-90"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-5 w-5 text-[#9d2f2d]">
                <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C240.4 221.6 255.6 221.6 264.9 231L319.9 286L374.9 231C384.3 221.6 399.5 221.6 408.8 231C418.1 240.4 418.2 255.6 408.8 264.9L353.8 319.9L408.8 374.9C418.2 384.3 418.2 399.5 408.8 408.8C399.4 418.1 384.2 418.2 374.9 408.8L319.9 353.8L264.9 408.8C255.5 418.2 240.3 418.2 231 408.8C221.7 399.4 221.6 384.2 231 374.9L286 319.9L231 264.9C221.6 255.5 221.6 240.3 231 231z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={onPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow flex items-center justify-center"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-6 w-6 text-[#9d2f2d]">
                <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320zM335 199C344.4 189.6 359.6 189.6 368.9 199C378.2 208.4 378.3 223.6 368.9 232.9L281.9 319.9L368.9 406.9C378.3 416.3 378.3 431.5 368.9 440.8C359.5 450.1 344.3 450.2 335 440.8L231 337C221.6 327.6 221.6 312.4 231 303.1L335 199z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={onNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow flex items-center justify-center"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-6 w-6 text-[#9d2f2d]">
                <path d="M64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM305 441C295.6 450.4 280.4 450.4 271.1 441C261.8 431.6 261.7 416.4 271.1 407.1L358.1 320.1L271.1 233.1C261.7 223.7 261.7 208.5 271.1 199.2C280.5 189.9 295.7 189.8 305 199.2L409 303C418.4 312.4 418.4 327.6 409 336.9L305 441z" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-4 text-center">
            <p className="font-corben-regular text-sm text-[#9d2f2d] uppercase">{item.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkGallery() {
  const colors = ['#ff97b6', '#fbedd8', '#cfe8f4'];
  const items = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    color: colors[i % colors.length],
    title: 'SOMETHING',
  }));

  const [activeIndex, setActiveIndex] = useState(null);
  const len = items.length;

  const open = (i) => setActiveIndex(i);
  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i > 0 ? i - 1 : i));
  const next = () => setActiveIndex((i) => (i < len - 1 ? i + 1 : i));

  useEffect(() => {
    const onKey = (e) => {
      if (activeIndex === null) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, len]);

  return (
    <section className="bg-[#fff8ef] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item, idx) => (
            <Tile key={item.id} item={item} index={idx} onOpen={open} />
          ))}
        </div>
      </div>

      <Modal items={items} activeIndex={activeIndex} onClose={close} onPrev={prev} onNext={next} />
    </section>
  );
}
