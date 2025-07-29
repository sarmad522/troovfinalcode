'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import '../globals.css'
const partners = [
  { name: 'Meta', image: '/images/brand1.png' },
  { name: 'Google', image: '/images/google.png' },
  { name: 'Adobe', image: '/images/brand3.png' },
  { name: 'Microsoft', image: '/images/brand4.png' },
  { name: 'AWS', image: '/images/brand5.png' },
  { name: 'Google Developers', image: '/images/grrogdeveloper.png' },
];

const PartnersSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    slides: {
      perView: 6,
      spacing: 20,
    },
    breakpoints: {
      
      '(max-width: 768px)': {
        slides: { perView: 2 },
      },
      '(max-width: 1024px)': {
        slides: { perView: 3 },
      },
    },
    created(slider) {
      slider.moveToIdx(0, true, { duration: 10000 });
      function autoSlide() {
        slider.next();
        setTimeout(autoSlide, 2500);
      }
      setTimeout(autoSlide, 3000);
    },
  });

  return (
    <section className=" max-w-7xl mx-auto w-full py-5 sm:py-10 md:py-20 bg-black text-white text-center">
      <h2 className=" font-aktifo lg:text-[30px] font-light mb-8">Partners with</h2>

      <div
        className="  max-w-7xl mx-auto   w-full border-2 rounded-full lg:px-12 py-12 border-white max-w-6xl mx-auto animate-borderGlow"
        style={{ borderColor: '#4E3682' }}
      >
        <div ref={sliderRef} className="keen-slider flex items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="keen-slider__slide flex justify-center items-center"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="  h-8   md:h-14 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSlider;
