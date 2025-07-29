'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUsScroll: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const trackWidth = track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: -trackWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'top bottom',
        end: '+=80000', // slow scroll
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <div ref={wrapperRef} className="md:h-[40vh]">
      <div className="sticky top-0 overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-nowrap"
          style={{ width: '200vw' }}
        >
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#A890CD] to-[#6C54A0] "
              style={{
                fontSize: '15vw',
                minWidth: '120vw',
                whiteSpace: 'nowrap',
              }}
            >
              AboutUsAboutUs
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsScroll;
