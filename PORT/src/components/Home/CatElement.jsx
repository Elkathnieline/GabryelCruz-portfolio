import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CatElement() {
  const catRef = useRef(null);

  useEffect(() => {
    if (catRef.current) {
      gsap.to(catRef.current, {
        y: -20,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <div ref={catRef} className="w-full">
      <img src="/images/cat icon.png" alt="cat" className="block h-auto w-full select-none" />
    </div>
  )
}
