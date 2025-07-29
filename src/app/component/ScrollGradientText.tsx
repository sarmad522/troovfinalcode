'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AboutUsScrollProps {
  texts?: string[]; // Optional for flexibility
  repeat?: number;
  height?: string;
  scrollSpeed?: number; // 80000 like value (larger = slower)
}

const AboutUsScroll: React.FC<AboutUsScrollProps> = ({
  texts = ['Services'],
  repeat = 2,
  height = '40vh',
  scrollSpeed = 80000, // slow scroll
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const trackWidth = track.scrollWidth - window.innerWidth;

    const anim = gsap.to(track, {
      x: -trackWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'top bottom',
        end: `+=${scrollSpeed}`,
        scrub: 0.3,
      },
    });

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollSpeed]);

  return (
   <div
  ref={wrapperRef}
  className="relative md:h-[40vh] z-10 "
>
      <div className="sticky top-0">
        <div
          ref={trackRef}
          className="flex flex-nowrap will-change-transform"
          style={{ width: `${repeat * 100}vw` }}
        >
          {Array.from({ length: repeat }).map((_, i) =>
            texts.map((text, index) => (
              <div
                key={`${i}-${index}`}
                className="  relative z-10 flex-shrink-0 flex items-center justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#A890CD] to-[#6C54A0]"
                style={{
                  fontSize: '15vw',
                  minWidth: '120vw',
                  whiteSpace: 'nowrap',
                }}
              >
                {text}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUsScroll;
