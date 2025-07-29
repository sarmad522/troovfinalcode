'use client';

import { useEffect, useRef } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import ContactSection from './ContactSection';
import CaseStudiesGrid from '../case-studies/CaseStudiesGrid';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../globals.css';

gsap.registerPlugin(ScrollTrigger);

type Location = {
  title: string;
  image: string;
  alt: string;
};

interface WhereWeWorkProps {
  title?: string;
  titleSize?: string;
  paragraph: string;
  locations: Location[];
  showCaseStudies?: boolean;
  showContactSection?: boolean;
}

const WhereWeWork: React.FC<WhereWeWorkProps> = ({
  title = 'Where we work',
  paragraph,
  locations,
  showCaseStudies = true,
  showContactSection = true,
}) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    (NativeFancybox as any).bind('[data-fancybox="gallery"]', {
      Thumbs: { autoStart: true },
      Toolbar: {
        display: ['zoom', 'close', 'fullscreen', 'thumbs'],
      },
    });

    return () => {
      NativeFancybox.unbind('[data-fancybox="gallery"]');
    };
  }, []);

  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (!paragraph) return;

    const chars = paragraph.querySelectorAll('.char');

    // Animate each character left to right
    gsap.fromTo(
      chars,
      { opacity: 0 },
      {
        opacity: 1,
        color: '#ffffff',
        stagger: 0.01,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: paragraph,
          start: 'top 85%',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    // Animate each location card smoothly
    gsap.from('.location-card', {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.locations-wrapper',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const renderCharacters = paragraph.split('').map((char, index) => (
    <span
      key={index}
      className="char inline-block will-change-[opacity] transition-opacity"
      style={{ color: '#ffffff', opacity: 0 }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <section className="bg-gradient-to-b from-black via-[#4E3682] to-[#000] text-white py-[50px] md:py-5 text-center">
      <h2 className=" leading-tight  text-[40px] md:text-[72px] lg:text-[96px] font-bold bg-gradient-to-r from-[#6C54A0] to-[#A890CD] bg-clip-text text-transparent">
        {title}
      </h2>

      {/* Location Cards */}
      <div className="locations-wrapper max-w-7xl flex flex-wrap justify-center mx-auto gap-8 sm:mt-[0px] md:mt-[-52px] mb-20">
        {locations.map((loc, index) => (
          <a
            key={index}
            data-fancybox="gallery"
            href={loc.image}
            data-caption={loc.title}
            className="location-card  mx-auto w-[98%]  sm:w-[98%] md:w-[45%] lg:w-[30%] rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-[#6C54A0]"
          >
            <img
              src={loc.image}
              alt={loc.alt}
              className="w-full h-48 object-cover transition duration-300"
            />
            <div className="py-4 text-[20px] font-aktifo">{loc.title}</div>
          </a>
        ))}
      </div>

      {/* Animated Paragraph */}
      <div className="max-w-7xl w-full px-2 md:px-5 mx-auto">
        <p
          ref={paragraphRef}
          className="  font-aktifo max-w-2xl  w-full  md:w-[41%] md:ml-auto sm:text-[22px] mb-[10px] md:md:mb-[60px] lg:text-[22px] font-bold text-start sm:leading-[25px] md:leading-[30px] flex flex-wrap gap-y-2"
        >
          {renderCharacters}
        </p>

        {showCaseStudies && <CaseStudiesGrid />}
      </div>

      {showContactSection && (
        <div className="  md:mt-10 lg:mt-15">
          <ContactSection />
        </div>
      )}
    </section>
  );
};

export default WhereWeWork;
