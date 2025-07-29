'use client';

import { FC, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Card = {
  step: number;
  title: string;
  desc: string;
  badge?: string;
  image: string;         
};

interface Props {
  heading: string;
  ctaLabel: string;
  topCards: Card[];
  bottomCards: Card[];
}

const HiringProcessSection: FC<Props> = ({
  heading,
  ctaLabel,
  topCards,
  bottomCards,
}) => {
  /* refs for animation */
  const sectionRef   = useRef<HTMLDivElement>(null);
  const topRowRef    = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  /* scroll‑based horizontal animations */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!topRowRef.current || !bottomRowRef.current || !sectionRef.current) return;

      /* distance = hidden width to reveal */
      const topDistance =
        topRowRef.current.scrollWidth - topRowRef.current.clientWidth;
      const bottomDistance =
        bottomRowRef.current.scrollWidth - bottomRowRef.current.clientWidth;

      /* Top row → moves right (positive X) */
      gsap.fromTo(
        topRowRef.current,
        { x: 0 },
        {
          x: -topDistance, // element moves left so cards appear to slide right
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      /* Bottom row → moves left (negative X) */
      gsap.fromTo(
        bottomRowRef.current,
        { x: 0 },
        {
          x: bottomDistance, // opposite direction
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

 const CardBox: FC<Card> = ({ step, title, desc, badge, image }) => (
  <div className="min-w-[650px] bg-[#140C2B] rounded border-3 border-[#4E3682] px-5  py-4 text-white flex items-center gap-10   ">
    {/* Left Side – Image */}
    <div className="w-55 h-55 ">
      <Image
        src={image}
        alt={title}
        width={150}
        height={150}
        className="w-full h-full   object-cover rounded-md"
      />
    </div>

    {/* Right Side – Content */}
    <div className=" relative flex flex-col justify-center items-start ">
      {badge && (
        <span className="inline-block  ml-auto mb-1 lg:text-[12px] px-3 py-1 rounded-full  border-1">
          {badge}
        </span>
      )}
      <h4 className="text-lg  lg:text-[20px]    text-white">Step {step}</h4>
      <h3 className="text-lg  md:text-[30px] lg:text-[35px] font-bold mb-1">{title}</h3>
      <p className="text-sm text-white/80  lg:text-[20px]">{desc}</p>
    </div>
  </div>
);


  return (
    <section
      ref={sectionRef}
      className="text-white py-20 px-4  "
    >
      {/* Heading + CTA */}
      <div className="max-w-6xl mx-auto mb-12 flex flex-col justify-center items-center md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h2   className="max-w-6xl  w-[100%] md:w-[80%] lg:w-[70%] text-[32px]  md:text-[45px]  lg:text-[65px] font-bold bg-gradient-to-r from-[#6C54A0] via-[#A890CD] to-[#6C54A0] text-transparent bg-clip-text  leading-tight"
>                         
            {heading}
          </h2>                 
          <p className="text-[12px] md:text-[14px]  lg:text-[16px] mt-2  text-white/70">
            Simple. Transparent. Respectful of your time.<br />
            Let’s build something extraordinary together.
          </p>
        </div>

        <button className="self-start md:self-auto bg-[#6C54A0] hover:bg-[#6a4ec4] transition px-2 py-2  md:px-3 md:py-2 lg:px-6 lg:py-4 rounded-md text-sm font-semibold w-[70%]  md:w-[20%] lg:w-[15%]">
          {ctaLabel}
        </button>
      </div>

      {/* TOP ROW – moves right on scroll */}
      <div className="overflow-hidden">
        <div ref={topRowRef} className="flex gap-6">
          {/* duplicate array to keep row long for smooth scroll */}
          {topCards.concat(topCards).map((card, idx) => (
            <CardBox key={`top-${idx}`} {...card} />
          ))}
        </div>
      </div>

      {/* BOTTOM ROW – moves left on scroll */}
      <div className="mt-12 overflow-hidden hidden   md:block none">
        <div ref={bottomRowRef} className="flex gap-6">
          {bottomCards.concat(bottomCards).map((card, idx) => (
            <CardBox key={`bottom-${idx}`} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringProcessSection;
