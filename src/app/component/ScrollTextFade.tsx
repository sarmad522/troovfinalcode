'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../globals.css'
gsap.registerPlugin(ScrollTrigger);

type ScrollTextFadeProps = {
  text?: string;
};

const ScrollTextFade = ({ text = '' }: ScrollTextFadeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll('.char');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        end: 'bottom 15%',
        scrub: 0.4,
      },
    });

    tl.to(chars, {
      color: '#FFFFFF',
      stagger: 0.015, // left to right feel
      ease: 'power1.out',
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  if (!text) {
    console.warn('⚠️ ScrollTextFade: No `text` prop provided.');
  }

  // Split text into words, then each word into characters
const renderWords = text.split('\n').map((line, lineIndex) => (
  <div key={lineIndex} className="w-full">
    {line.split(' ').map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block mr-3">
        {word.split('').map((char, charIndex) => (
          <span
            key={charIndex}
            className="char inline-block will-change-[color]"
            style={{ color: '#4B4B4B' }}
          >
            {char}
          </span>
        ))}
      </span>
    ))}
  </div>
));


  return (
    <section className="pt-0 pb-12 md:py-14 md:px-5 ">
      <div
        ref={containerRef}
        className="   relative z-10 font-aktifo  max-w-7xl mx-auto sm:text-[1.2rem] md:text-[2.5rem] lg:text-[55px] md:leading-[70px] font-bold flex flex-wrap sm:gap-y-2 md:gap-y-4 p-2"
      >
        {renderWords}
      </div>
    </section>
  );
};

export default ScrollTextFade;
