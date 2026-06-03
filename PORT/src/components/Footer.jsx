import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Get In Touch', action: 'contact' },
  { label: 'Gallery', to: '/gallery' },
];

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactOpen = () => {
    setIsContactOpen(true);
  };

  const handleContactClose = () => {
    setIsContactOpen(false);
  };

  useEffect(() => {
    const handler = () => setIsContactOpen(true);
    window.addEventListener('openContactModal', handler);
    return () => window.removeEventListener('openContactModal', handler);
  }, []);

  return (
    <footer className="bg-[#ff97b6] px-4 py-8 text-[#f6efe4] sm:px-8 sm:py-9 lg:px-16 lg:py-12" id="footer">
      {isContactOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-[2rem] bg-[#faedd6] px-6 py-8 text-[#3f2a25] shadow-2xl sm:px-8 sm:py-10">
            <button
              aria-label="Close contact form"
              className="absolute right-4 top-4 text-2xl leading-none text-[#6b4a42] transition hover:opacity-70"
              onClick={handleContactClose}
              type="button"
            >
              ×
            </button>

            <h2 className="text-center text-3xl font-bold tracking-wide sm:text-4xl">get in touch!</h2>

            <form
              className="mt-8 space-y-5"
              onSubmit={(event) => {
                event.preventDefault();
                handleContactClose();
              }}
            >
              <label className="block">
                <span className="mb-2 block text-sm uppercase tracking-[0.18em] text-[#6b4a42]">name</span>
                <input
                  className="w-full border-0 border-b border-[#6b4a42]/60 bg-transparent px-0 py-2 text-base outline-none placeholder:text-[#6b4a42]/45 focus:border-[#6b4a42]"
                  name="name"
                  placeholder="Your name"
                  type="text"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm uppercase tracking-[0.18em] text-[#6b4a42]">email</span>
                <input
                  className="w-full border-0 border-b border-[#6b4a42]/60 bg-transparent px-0 py-2 text-base outline-none placeholder:text-[#6b4a42]/45 focus:border-[#6b4a42]"
                  name="email"
                  placeholder="Your email"
                  type="email"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm uppercase tracking-[0.18em] text-[#6b4a42]">message</span>
                <textarea
                  className="min-h-28 w-full resize-none border-0 border-b border-[#6b4a42]/60 bg-transparent px-0 py-2 text-base outline-none placeholder:text-[#6b4a42]/45 focus:border-[#6b4a42]"
                  name="message"
                  placeholder="Write your message here"
                />
              </label>

              <div className="pt-4 text-center">
                <button
                  className="rounded-full border-2 border-[#6b4a42] px-6 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#3f2a25] transition hover:bg-[#6b4a42] hover:text-[#faedd6]"
                  type="submit"
                >
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:gap-7 md:grid-cols-3 md:items-center lg:gap-8">
        <nav className="font-montserrat-light hidden flex-col gap-2 text-sm sm:flex sm:text-sm md:text-left md:text-[0.85rem] lg:text-[0.95rem] xl:text-base">
          {navLinks.map((link) =>
            link.to ? (
              <Link key={link.label} className="hover:opacity-80" to={link.to}>
                {link.label}
              </Link>
            ) : link.action === 'contact' ? (
              <button key={link.label} className="text-left hover:opacity-80" onClick={handleContactOpen} type="button">
                {link.label}
              </button>
            ) : (
              <a key={link.label} className="hover:opacity-80" href={link.href}>
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="text-center">
          <h3 className="font-vampiro-one text-2xl leading-none lg:text-2xl xl:text-3xl">Gabryel Cruz</h3>
          <div className="mt-4 flex items-center justify-center gap-2 text-[#f6efe4]">
            <a aria-label="Facebook" className="hover:opacity-80" href="https://www.facebook.com/gabryel.cruz.9674" rel="noreferrer" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-5 w-5 fill-current sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7" aria-hidden="true">
                <path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
              </svg>
            </a>
            <a aria-label="Instagram" className="hover:opacity-80" href="https://www.instagram.com/elkathnieline?igsh=MTd6MHZxZG90OHV5Mg%3D%3D&utm_source=qr" rel="noreferrer" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-7 w-7 fill-current sm:h-7 sm:w-7 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9" aria-hidden="true">
                <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
              </svg>
            </a>
          </div>
          <p className="font-montserrat-light mt-3 text-[0.65rem] sm:text-[0.7rem] md:text-[0.78rem] lg:text-[0.85rem] xl:text-[0.95rem]">© 2026 All Rights Reserved </p>
        </div>

        <div className="hidden justify-center sm:flex md:justify-end">
          <button
            className="font-montserrat-light flex flex-col items-center gap-1 text-center text-[0.8rem] lg:text-[0.9rem] xl:text-[1rem] hover:opacity-80"
            onClick={handleScrollTop}
            type="button"
          >
            <span aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-7 w-7 fill-current sm:h-7 sm:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9">
                <path d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7C149.8 291.2 170.1 291.2 182.6 278.7L288 173.3L288 544C288 561.7 302.3 576 320 576C337.7 576 352 561.7 352 544L352 173.3L457.4 278.7C469.9 291.2 490.2 291.2 502.7 278.7C515.2 266.2 515.2 245.9 502.7 233.4L342.7 73.4z" />
              </svg>
            </span>
            <span>
              Go back to
              <br />
              top of page
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}