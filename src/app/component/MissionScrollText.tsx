'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MissionScrollText = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll('.mission-word');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(words, {
      color: '#FFFFFF',
      stagger: 0.08,
      ease: 'none',
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  const paragraph = `Our mission is to transform bold ideas into purposeful digital experiences by empowering brands through design, innovation, and technology to create real world impact.`;

  const renderWords = paragraph.split(' ').map((word, index) => (
    <span
      key={index}
      className="mission-word inline-block mr-2 will-change-[color]"
      style={{ color: '#4B4B4B' }}
    >
      {word}
    </span>
  ));

  return (
    <section className="  relative  h-90  p-2 md:py-2 md:px-0 bg-black">
<img src="/images/missingimageright.png"  className='absolute sm:right-0  w-[30%]  md:right-[-5%] md:top-[-60%]'  />
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto    md:px-8 sm:text-2xl  md:text-5xl leading-snug font-semibold flex flex-wrap   sm:gap-y-3 md:gap-y-4"
      >
        {renderWords}
      </div>
<img src="/images/rightimagemssion.png"  className='absolute sm:right-0  w-[40%]  md:left-[-5%] md:top-[-80%]'  />
    </section>
  );
};

export default MissionScrollText;
