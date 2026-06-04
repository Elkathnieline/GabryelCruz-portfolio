import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import camera from '../../../assets/images/camera.png';

export default function CameraElement() {
  const cameraRef = useRef(null);

  useEffect(() => {
    if (cameraRef.current) {
      gsap.to(cameraRef.current, {
        rotation: 15,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <div ref={cameraRef} className="w-full">
      <img src={camera} alt="camera" className="block h-auto w-full select-none" />
    </div>
  )
}
