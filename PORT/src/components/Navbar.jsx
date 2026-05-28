import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between border-b-2 border-[#c7e5f4] bg-[#f7edd8] px-4 py-3 sm:px-6 lg:px-10">
      <div className="flex flex-1 items-center justify-center gap-5 sm:gap-8 md:gap-14 lg:gap-24">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm font-bold tracking-tight text-[#a04b3d] transition-colors duration-200 hover:text-[#ef9fd3] sm:text-base md:text-lg lg:text-xl ${isActive ? 'text-[#ef9fd3]' : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-sm font-bold tracking-tight text-[#a04b3d] transition-colors duration-200 hover:text-[#ef9fd3] sm:text-base md:text-lg lg:text-xl ${isActive ? 'text-[#ef9fd3]' : ''}`
          }
        >
          About Me
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `text-sm font-bold tracking-tight text-[#a04b3d] transition-colors duration-200 hover:text-[#ef9fd3] sm:text-base md:text-lg lg:text-xl ${isActive ? 'text-[#ef9fd3]' : ''}`
          }
        >
          Gallery
        </NavLink>
      </div>
      <div className="flex items-center gap-2 text-[#a04b3d] sm:gap-3">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl transition-colors duration-200 hover:text-[#ef9fd3] sm:text-2xl"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl transition-colors duration-200 hover:text-[#ef9fd3] sm:text-2xl"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </nav>
  )
}
