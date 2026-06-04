import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import charmedImage from '../../assets/images/Charmed.png';
import charmedImage1 from '../../assets/images/Charmed1.png';
import charmedImage2 from '../../assets/images/Charmed2.png';
import ccnaImage1 from '../../assets/images/CCNA-_Introduction_to_Networks_certificate_cruzgabryel2154-gmail-com_0592d3b3-49e1-4b2f-a21f-f37105924a0a.jpg';
import ccnaImage2 from '../../assets/images/CCNA-_Enterprise_Networking-_Security-_and_Automation_certificate_cruzgabryel2154-gmail-com_7b4d398f-2fff-4760-b052-fa959832fb65.jpg';
import ccnaImage3 from '../../assets/images/_certificate_cruzgabryel2154-gmail-com_12d25570-64f2-467d-b28b-4890ba067ca9.jpg';
import jadeImage from '../../assets/images/Jade 6.JPEG';
import jadeImage1 from '../../assets/images/Jade1.JPEG';
import jadeImage2 from '../../assets/images/Jade2.JPEG';
import jadeImage3 from '../../assets/images/Jade3.JPEG';
import jadeImage4 from '../../assets/images/Jade4.JPEG';
import jadeImage5 from '../../assets/images/Jade5.JPEG';
import jadeImage7 from '../../assets/images/Jade7.JPEG';
import jadeImage8 from '../../assets/images/Jade8.JPEG';
import pnpDashImage from '../../assets/images/P&P Dash Log.JPEG';
import pnpDashImage1 from '../../assets/images/P&P Dash.JPEG';
import pnpDashImage2 from '../../assets/images/P&P Dash1.JPEG';
import pnpDashImage3 from '../../assets/images/P&P Dash2.JPEG';
import pnpDashImage4 from '../../assets/images/P&P Dash3.JPEG';
import pnpDashImage5 from '../../assets/images/P&P Dash4.JPEG';
import pnpDashImage6 from '../../assets/images/P&P Dash5.JPEG';
import pnpImage from '../../assets/images/P&P.png';
import pnpImage1 from '../../assets/images/P&P1.png';
import pnpImage2 from '../../assets/images/P&P2.png';
import pnpImage3 from '../../assets/images/P&P3.png';
import zomtagImage from '../../assets/images/zomtag.png';
import zomtagVideo from '../../assets/images/zomtagvid.mp4';

const JOMAR_GITHUB_USERNAME = 'Jomar77';
const MY_GITHUB_USERNAME = 'elkathnieline';

function normalizeRepoName(name) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function mapRepo(repo) {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
  };
}

const galleryItems = [
  {
    id: 1,
    title: 'Psalm & Platter Website',
    cover: pnpImage,
    images: [
      { src: pnpImage, label: 'Home Page' },
      { src: pnpImage1, label: 'Booking Page' },
      { src: pnpImage2, label: 'Contact Section' },
      { src: pnpImage3, label: 'Business Section' },
    ],
  },
  {
    id: 2,
    title: 'Psalm & Platter Dashboard',
    cover: pnpDashImage,
    images: [
      { src: pnpDashImage, label: 'Login' },
      { src: pnpDashImage1, label: 'Home Page' },
      { src: pnpDashImage2, label: 'Booking Management / Pending' },
      { src: pnpDashImage3, label: 'Dashboard Settings' },
      { src: pnpDashImage4, label: 'Gallery' },
      { src: pnpDashImage5, label: 'Reports Page' },
      { src: pnpDashImage6, label: 'Booking Management / Processed' },
    ],
  },
  {
    id: 3,
    title: 'Charmed Shopping Website',
    cover: charmedImage,
    images: [
      { src: charmedImage, label: 'Order Form' },
      { src: charmedImage1, label: 'Gallery Page' },
      { src: charmedImage2, label: 'Products Page' },
    ],
  },
  {
    id: 4,
    title: 'Airline Booking System in Jade',
    cover: jadeImage,
    images: [
      { src: jadeImage, label: 'Ticket Layout' },
      { src: jadeImage1, label: 'Booking Confirmation' },
      { src: jadeImage2, label: 'Ticket Information' },
      { src: jadeImage3, label: 'Checkout' },
      { src: jadeImage4, label: 'Admin Panel' },
      { src: jadeImage5, label: 'Seat Selection' },
      { src: jadeImage7, label: 'Home' },
      { src: jadeImage8, label: 'Flight Search' },
    ],
  },
  {
    id: 5,
    title: 'Zomtag',
    cover: zomtagImage,
    images: [
      { src: zomtagImage, label: 'Zomtag' },
      { src: zomtagVideo, label: 'Zomtag video', type: 'video' },
    ],
  },
  {
    id: 6,
    title: 'Networking Certifications',
    cover: ccnaImage1,
    images: [
      { src: ccnaImage1, label: 'CCNA Introduction to Networks' },
      { src: ccnaImage2, label: 'CCNA Enterprise Networking, Security, and Automation' },
      { src: ccnaImage3, label: 'CCNA Switching, Routing, and Wireless Essentials' },
    ],
  },
];

function Tile({ item, index, onOpen, registerCard }) {
  return (
    <figure
      ref={(node) => registerCard(node, index)}
      className="absolute left-1/2 top-1/2 flex w-[220px] -translate-x-1/2 -translate-y-1/2 flex-col items-center sm:w-[250px] md:w-[280px]"
      style={{ zIndex: galleryItems.length - index }}
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        className="group relative h-[290px] w-full overflow-hidden rounded-[14px] border border-white/70 bg-white shadow-[0_18px_35px_rgba(0,0,0,0.16)] focus:outline-none sm:h-[335px] md:h-[375px]"
        aria-label={`Open ${item.title}`}
      >
        <img
          src={item.cover}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-4 py-3">
          <p className="font-corben-regular text-sm tracking-wide text-white uppercase">{item.title}</p>
        </div>
      </button>
    </figure>
  );
}

function renderMedia(media) {
  if (media.type === 'video') {
    return (
      <video
        className="max-h-[78vh] w-auto max-w-full object-contain"
        controls
        playsInline
        preload="metadata"
      >
        <source src={media.src} type="video/mp4" />
      </video>
    );
  }

  return <img src={media.src} alt={media.label} className="max-h-[78vh] w-auto max-w-full object-contain" />;
}

function renderThumbMedia(media) {
  if (media.type === 'video') {
    return <video src={media.src} className="h-full w-full object-cover" muted playsInline preload="metadata" />;
  }

  return <img src={media.src} alt={media.label} className="h-full w-full object-cover" />;
}

function ExpandedGallery({ items, onBack, onOpenMedia, registerExpandedCard, githubProjects, projectsStatus }) {
  return (
    <div className="rounded-[16px] bg-[#fff8ef] p-4 sm:p-6 md:p-8">
      <div className="mb-6 flex justify-start sm:mb-8">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full bg-white px-4 py-2 font-corben-regular text-xs uppercase tracking-wide text-[#9d2f2d] shadow hover:opacity-90 sm:text-sm"
        >
          Back to Stack
        </button>
      </div>

      <div className="space-y-10 sm:space-y-12">
        {items.map((group, groupIndex) => (
          <section key={group.id}>
            <h3 className="mb-4 font-corben-regular text-lg uppercase tracking-wide text-[#9d2f2d] sm:text-xl">
              {group.title}
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {group.images.map((media, mediaIndex) => (
                <figure
                  key={media.label}
                  ref={(node) => registerExpandedCard(node, `${group.id}-${mediaIndex}`)}
                  className="min-w-0"
                >
                  <button
                    type="button"
                    onClick={() => onOpenMedia(groupIndex, mediaIndex)}
                    className="group block w-full overflow-hidden rounded-[12px] border border-[#f1d9de] bg-white shadow-[0_12px_24px_rgba(0,0,0,0.12)] focus:outline-none"
                    aria-label={`Open ${media.label}`}
                  >
                    <div className="aspect-[4/5] w-full">
                      {renderThumbMedia(media)}
                    </div>
                  </button>

                  <figcaption className="mt-2 text-center font-montserrat-light text-xs text-[#9d2f2d] sm:text-sm">
                    {media.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-[14px] border border-[#f1d9de] bg-white px-4 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.08)] sm:px-6">
        <h3 className="font-corben-regular text-base uppercase tracking-wide text-[#9d2f2d] sm:text-lg">
          Latest GitHub Projects
        </h3>

        {projectsStatus === 'loading' ? (
          <p className="mt-3 font-montserrat-light text-sm text-[#9d2f2d]">Loading projects...</p>
        ) : null}

        {projectsStatus === 'error' ? (
          <p className="mt-3 font-montserrat-light text-sm text-[#9d2f2d]">
            Could not load GitHub projects right now.
          </p>
        ) : null}

        {projectsStatus === 'success' && githubProjects.length > 0 ? (
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {githubProjects.map((project) => (
              <li key={project.id} className="rounded-[12px] border border-[#f1d9de] bg-[#fff8ef] p-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-corben-regular text-sm text-[#9d2f2d] hover:opacity-80"
                >
                  {project.name}
                </a>
                <p className="mt-1 font-montserrat-light text-xs text-[#9d2f2d]">
                  {project.description || 'No description provided.'}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

function MediaModal({ items, activeMedia, onClose, onPrevMedia, onNextMedia }) {
  if (activeMedia === null) return null;

  const item = items[activeMedia.projectIndex];
  const media = item.images[activeMedia.mediaIndex];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <button type="button" className="absolute inset-0 bg-black/75" onClick={onClose} aria-label="Close media viewer" />

      <div className="relative z-10 w-full max-w-3xl px-4">
        <div className="mx-auto overflow-hidden rounded-md bg-white shadow-lg">
          <div className="flex items-center justify-between border-b border-[#9d2f2d]/10 px-4 py-3 sm:px-6">
            <p className="font-corben-regular text-sm uppercase tracking-wide text-[#9d2f2d]">{media.label}</p>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-white/90 p-2 shadow hover:opacity-90"
              aria-label="Close media viewer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-5 w-5 text-[#9d2f2d]">
                <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C240.4 221.6 255.6 221.6 264.9 231L319.9 286L374.9 231C384.3 221.6 399.5 221.6 408.8 231C418.1 240.4 418.2 255.6 408.8 264.9L353.8 319.9L408.8 374.9C418.2 384.3 418.2 399.5 408.8 408.8C399.4 418.1 384.2 418.2 374.9 408.8L319.9 353.8L264.9 408.8C255.5 418.2 240.3 418.2 231 408.8C221.7 399.4 221.6 384.2 231 374.9L286 319.9L231 264.9C221.6 255.5 221.6 240.3 231 231z" />
              </svg>
            </button>
          </div>

          <div className="relative flex justify-center bg-[#fff8ef] px-4 py-6">
            {renderMedia(media)}

            <button
              type="button"
              onClick={onPrevMedia}
              className="absolute left-4 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 shadow hover:opacity-90"
              aria-label="Previous media"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-6 w-6 text-[#9d2f2d]">
                <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320zM335 199C344.4 189.6 359.6 189.6 368.9 199C378.2 208.4 378.3 223.6 368.9 232.9L281.9 319.9L368.9 406.9C378.3 416.3 378.3 431.5 368.9 440.8C359.5 450.1 344.3 450.2 335 440.8L231 337C221.6 327.6 221.6 312.4 231 303.1L335 199z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={onNextMedia}
              className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 shadow hover:opacity-90"
              aria-label="Next media"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-6 w-6 text-[#9d2f2d]">
                <path d="M64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM305 441C295.6 450.4 280.4 450.4 271.1 441C261.8 431.6 261.7 416.4 271.1 407.1L358.1 320.1L271.1 233.1C261.7 223.7 261.7 208.5 271.1 199.2C280.5 189.9 295.7 189.8 305 199.2L409 303C418.4 312.4 418.4 327.6 409 336.9L305 441z" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-4 text-center">
            <p className="font-montserrat-light text-sm text-[#9d2f2d] sm:text-base">{item.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkGallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeMedia, setActiveMedia] = useState(null);
  const [githubProjects, setGithubProjects] = useState([]);
  const [projectsStatus, setProjectsStatus] = useState('loading');
  const sectionRef = useRef(null);
  const stackWrapperRef = useRef(null);
  const cardRefs = useRef([]);
  const expandedCardRefs = useRef({});
  const hasAnimated = useRef(false);

  const open = (index) => {
    if (isExpanded) return;

    const cards = cardRefs.current.filter(Boolean);
    const activeCard = cardRefs.current[index];
    const otherCards = cards.filter((_, cardIndex) => cardIndex !== index);

    const timeline = gsap.timeline({
      onComplete: () => {
        setIsExpanded(true);
      },
    });

    timeline.to(
      otherCards,
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.35,
        stagger: 0.04,
        ease: 'power2.out',
      },
      0
    );

    timeline.to(
      activeCard,
      {
        scale: 1.08,
        duration: 0.35,
        ease: 'power2.out',
      },
      0
    );

    timeline.to(
      stackWrapperRef.current,
      {
        opacity: 0,
        duration: 0.2,
      },
      0.25
    );
  };

  const closeExpanded = () => {
    setIsExpanded(false);
    setActiveMedia(null);

    requestAnimationFrame(() => {
      const cards = cardRefs.current.filter(Boolean);

      gsap.set(stackWrapperRef.current, { opacity: 1 });
      gsap.set(cards, { opacity: 1, scale: 1 });
    });
  };

  const closeMedia = () => setActiveMedia(null);
  const openMedia = (projectIndex, mediaIndex) => setActiveMedia({ projectIndex, mediaIndex });
  const prevMedia = () =>
    setActiveMedia((current) => {
      if (!current) return current;
      const item = galleryItems[current.projectIndex];
      const nextIndex = current.mediaIndex > 0 ? current.mediaIndex - 1 : current.mediaIndex;
      return { projectIndex: current.projectIndex, mediaIndex: nextIndex };
    });
  const nextMedia = () =>
    setActiveMedia((current) => {
      if (!current) return current;
      const item = galleryItems[current.projectIndex];
      const nextIndex = current.mediaIndex < item.images.length - 1 ? current.mediaIndex + 1 : current.mediaIndex;
      return { projectIndex: current.projectIndex, mediaIndex: nextIndex };
    });

  const registerCard = (node, index) => {
    cardRefs.current[index] = node;
  };

  const registerExpandedCard = (node, key) => {
    if (!node) return;
    expandedCardRefs.current[key] = node;
  };

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        if (activeMedia !== null) {
          closeMedia();
          return;
        }

        if (isExpanded) {
          closeExpanded();
        }
      }

      if (activeMedia !== null && event.key === 'ArrowLeft') prevMedia();
      if (activeMedia !== null && event.key === 'ArrowRight') nextMedia();
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeMedia, isExpanded]);

  useEffect(() => {
    const controller = new AbortController();

    const loadProjects = async () => {
      try {
        setProjectsStatus('loading');

        const [jomarResponse, myResponse] = await Promise.all([
          fetch(
            `https://api.github.com/users/${JOMAR_GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
            { signal: controller.signal }
          ),
          fetch(
            `https://api.github.com/users/${MY_GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
            { signal: controller.signal }
          ),
        ]);

        if (!jomarResponse.ok || !myResponse.ok) {
          throw new Error('Failed to fetch GitHub projects');
        }

        const [jomarData, myData] = await Promise.all([jomarResponse.json(), myResponse.json()]);
        const jomarRepos = jomarData.filter((repo) => !repo.fork);
        const myRepos = myData.filter((repo) => !repo.fork);

        const jomarWebsite = jomarRepos.find((repo) => normalizeRepoName(repo.name) === 'sebswebsite');
        const jomarGameDev = jomarRepos.find((repo) => normalizeRepoName(repo.name) === 'gamedevassign');
        const myDashboard = myRepos.find((repo) => {
          const normalizedName = normalizeRepoName(repo.name);
          return normalizedName === 'sebsdashboard' || (normalizedName.includes('sebs') && normalizedName.includes('dashboard'));
        });

        const projects = [
          jomarWebsite
            ? mapRepo(jomarWebsite)
            : {
                id: 'fallback-sebs-website',
                name: 'SEBS-Website',
                description: 'Repository link',
                url: 'https://github.com/Jomar77/SEBS-Website',
              },
          jomarGameDev
            ? mapRepo(jomarGameDev)
            : {
                id: 'fallback-game-dev',
                name: 'GameDevAssign',
                description: 'Repository link',
                url: 'https://github.com/Jomar77/GameDevAssign',
              },
          myDashboard ? mapRepo(myDashboard) : null,
        ].filter(Boolean);

        setGithubProjects(projects);
        setProjectsStatus('success');
      } catch (error) {
        if (error.name !== 'AbortError') {
          setProjectsStatus('error');
        }
      }
    };

    loadProjects();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);

    if (cards.length === 0) return undefined;

    gsap.set(cards, {
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 0.98,
    });

    const spreadCards = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const isDesktop = window.matchMedia('(min-width: 768px)').matches;
      const desktopPositions = [
        { x: -340, y: 14, rotate: -16 },
        { x: -204, y: -8, rotate: -10 },
        { x: -68, y: -24, rotate: -4 },
        { x: 68, y: -24, rotate: 4 },
        { x: 204, y: -8, rotate: 10 },
        { x: 340, y: 14, rotate: 16 },
      ];
      const mobilePositions = [
        { x: -150, y: 10, rotate: -12 },
        { x: -90, y: -2, rotate: -7 },
        { x: -30, y: -12, rotate: -2 },
        { x: 30, y: -12, rotate: 2 },
        { x: 90, y: -2, rotate: 7 },
        { x: 150, y: 10, rotate: 12 },
      ];

      const positions = isDesktop ? desktopPositions : mobilePositions;

      cards.forEach((card, index) => {
        const position = positions[index] || { x: 0, y: 0, rotate: 0 };

        gsap.to(card, {
          x: position.x,
          y: position.y,
          rotate: position.rotate,
          scale: 1,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          delay: index * 0.08,
        });
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) spreadCards();
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isExpanded) return;

    const cards = Object.values(expandedCardRefs.current);

    if (cards.length === 0) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.03,
        ease: 'power3.out',
      }
    );
  }, [isExpanded]);

  return (
    <section ref={sectionRef} className="bg-[#fff8ef] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {isExpanded ? (
          <ExpandedGallery
            items={galleryItems}
            onBack={closeExpanded}
            onOpenMedia={openMedia}
            registerExpandedCard={registerExpandedCard}
            githubProjects={githubProjects}
            projectsStatus={projectsStatus}
          />
        ) : (
          <div
            ref={stackWrapperRef}
            className="relative mx-auto h-[620px] w-full max-w-7xl overflow-visible sm:h-[680px] md:h-[760px]"
          >
            {galleryItems.map((item, index) => (
              <Tile key={item.id} item={item} index={index} onOpen={open} registerCard={registerCard} />
            ))}
          </div>
        )}
      </div>

      <MediaModal items={galleryItems} activeMedia={activeMedia} onClose={closeMedia} onPrevMedia={prevMedia} onNextMedia={nextMedia} />
    </section>
  );
}
