import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function FlowerElement() {
  const flowerRef = useRef(null);

  useEffect(() => {
    if (flowerRef.current) {
      gsap.to(flowerRef.current, {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: 'none',
      });
    }
  }, []);

  return (
    <div ref={flowerRef} className="w-full">
      <img src="/images/flower.png" alt="flower" className="block h-auto w-full select-none" />
    </div>
  )
}
