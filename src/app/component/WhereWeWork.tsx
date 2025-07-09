'use client';

import { useEffect, useRef } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import ContactSection from './ContactSection';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const locations = [
  {
    title: 'Houston, United States',
    image: '/images/wherrewework.png',
    alt: 'Houston Skyline',
  },
  {
    title: 'London, United Kingdom',
    image: '/images/locationwork.png',
    alt: 'London Tower Bridge',
  },
  {
    title: 'Karachi, Pakistan',
    image: '/images/wherework.png',
    alt: 'Karachi Night View',
  },
];

const WhereWeWork = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  // ✅ Fancybox binding
  useEffect(() => {
    (NativeFancybox as any).bind('[data-fancybox="gallery"]', {
      Thumbs: {
        autoStart: true,
      },
      Toolbar: {
        display: ['zoom', 'close', 'fullscreen', 'thumbs'],
      },
    });

    return () => {
      NativeFancybox.unbind('[data-fancybox="gallery"]');
    };
  }, []);

  // ✅ GSAP scroll-triggered word color animation
  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (!paragraph) return;

    const words = paragraph.querySelectorAll('.word');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraph,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(words, {
      color: '#FFFFFF',
      stagger: 0.05,
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const paragraph = `Based in Karachi, our core team brings a global perspective to every project. We proudly collaborate with clients around the world, combining creative insight with streamlined remote processes to ensure smooth communication and seamless delivery, no matter where you are.`;

  const renderWords = paragraph.split(' ').map((word, index) => (
    <span
      key={index}
      className="word inline-block mr-1 will-change-[color]"
      style={{ color: '#4B4B4B' }} // Initial gray
    >
      {word}
    </span>
  ));

  return (
    <section className="bg-gradient-to-b from-black to-[#6C54A0] text-white py-0 px-4 text-center">
      <h2 className=" sm:text-[52px]   md:text-[100px] lg:text-[120px] font-bold bg-gradient-to-r from-[#6C54A0] to-[#A890CD] bg-clip-text text-transparent ">
        Where we work
      </h2>

      <div className="flex flex-wrap justify-center gap-8 mt-[-52]   mb-20">
        {locations.map((loc, index) => (
          <a
            key={index}
            data-fancybox="gallery"
            href={loc.image}
            data-caption={loc.title}
            className="w-full sm:w-[40%] md:w-[30%] lg:w-[25%] rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-[#6C54A0]"
          >
            <img
              src={loc.image}
              alt={loc.alt}
              className="w-full h-48 object-cover transition duration-300"
            />
            <div className="py-4 font-semibold text-lg">{loc.title}</div>
          </a>
        ))}
      </div>

      {/* GSAP animated paragraph */}
      <div className='mx-w-7xl  w-7xl  px-4 mx-auto'>
      <p
        ref={paragraphRef}
        className="max-w-xl ml-auto sm:text-[22px]    md:text-[24px] text-start leading-relaxed flex flex-wrap gap-y-2 "
      >
        {renderWords}
      </p>
</div>
      {/* Contact Form Component */}
      <div className="mt-20">
        <ContactSection />
      </div>
    </section>
  );
};

export default WhereWeWork;
