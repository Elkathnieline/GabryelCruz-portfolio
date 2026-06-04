import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import cactus from '../../../assets/images/cactus.png';

export default function CactusElement() {
  const cactusRef = useRef(null);

  useEffect(() => {
    if (cactusRef.current) {
      gsap.to(cactusRef.current, {
        y: -15,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <div ref={cactusRef} className="mx-auto w-[150%]">
      <img src={cactus} alt="cactus" className="block h-auto w-full select-none" />
    </div>
  )
}
