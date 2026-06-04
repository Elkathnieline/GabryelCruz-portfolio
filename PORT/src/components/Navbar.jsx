import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinkBase =
  'text-sm font-bold tracking-tight text-[#9d2f2d] transition-colors duration-200 hover:text-[#fdade3] sm:text-base md:text-lg lg:text-xl';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Me' },
  { to: '/gallery', label: 'Gallery' },
];

const socialItems = [
  {
    href: 'https://www.instagram.com/elkathnieline?igsh=MTd6MHZxZG90OHV5Mg%3D%3D&utm_source=qr',
    ariaLabel: 'Instagram',
    desktopClassName: 'inline-flex h-8 w-8 items-center justify-center transition-colors duration-200 hover:text-[#fdade3] sm:h-9 sm:w-9 md:h-8 md:w-8 lg:h-8 lg:w-8',
    mobileClassName: 'inline-flex h-10 w-10 items-center justify-center transition-colors duration-200 hover:text-[#fdade3]',
    desktopIconClassName: 'h-6 w-6 fill-current sm:h-7 sm:w-7 md:h-7 md:w-7 lg:h-7 lg:w-7',
    mobileIconClassName: 'h-7 w-7 fill-current',
    icon: InstagramIcon,
  },
  {
    href: 'https://www.facebook.com/gabryel.cruz.9674',
    ariaLabel: 'Facebook',
    desktopClassName: 'inline-flex h-6 w-6 items-center justify-center transition-colors duration-200 hover:text-[#fdade3] sm:h-7 sm:w-7 -ml-2',
    mobileClassName: 'inline-flex h-10 w-10 items-center justify-center transition-colors duration-200 hover:text-[#fdade3]',
    desktopIconClassName: 'h-4 w-4 fill-current sm:h-5 sm:w-5',
    mobileIconClassName: 'h-6 w-6 fill-current',
    icon: FacebookIcon,
  },
];

function SocialLink({ href, ariaLabel, anchorClass, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={anchorClass} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

function HamburgerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={className} aria-hidden="true">
      <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={className} aria-hidden="true">
      <path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
    </svg>
  );
}

function NavItem({ to, label, onClick, mobile = false }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => `${navLinkBase} ${mobile ? 'w-fit' : ''} ${isActive ? 'text-[#fdade3]' : ''}`}
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="flex w-full items-center justify-start bg-[#faedd6] px-4 py-2 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:px-6 lg:px-10">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#9d2f2d] transition-colors duration-200 hover:text-[#fdade3] md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>

        <div className="hidden md:block" />

        <div className="hidden items-center justify-center gap-5 sm:gap-8 md:flex md:gap-14 lg:gap-24">
          {navItems.map((item) => (
            <NavItem key={item.to} to={item.to} label={item.label} />
          ))}
        </div>

        <div className="hidden items-center justify-end gap-0 text-[#9d2f2d] md:flex sm:gap-0">
          {socialItems.map((item) => {
            const Icon = item.icon;

            return (
              <SocialLink key={item.ariaLabel} href={item.href} ariaLabel={item.ariaLabel} anchorClass={item.desktopClassName}>
                <Icon className={item.desktopIconClassName} />
              </SocialLink>
            );
          })}
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] transform bg-[#faedd6] px-5 py-6 shadow-2xl transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold tracking-tight text-[#9d2f2d]">Menu</span>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#9d2f2d] transition-colors duration-200 hover:text-[#fdade3]"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-5">
          {navItems.map((item) => (
            <NavItem key={item.to} to={item.to} label={item.label} onClick={closeMenu} mobile />
          ))}
        </div>

        <div className="mt-10 border-t border-[#9d2f2d]/20 pt-6">
          <div className="flex items-center gap-4 text-[#9d2f2d]">
            {socialItems.map((item) => {
              const Icon = item.icon;

              return (
                <SocialLink key={item.ariaLabel} href={item.href} ariaLabel={item.ariaLabel} anchorClass={item.mobileClassName}>
                  <Icon className={item.mobileIconClassName} />
                </SocialLink>
              );
            })}
          </div>
        </div>
      </div>

      {isMenuOpen ? <button type="button" className="fixed inset-0 z-40 bg-black/30 md:hidden" aria-label="Close menu overlay" onClick={closeMenu} /> : null}
    </>
  );
}
