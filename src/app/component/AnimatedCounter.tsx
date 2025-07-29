'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../globals.css';
gsap.registerPlugin(ScrollTrigger);

type Props = {
  value: number;
  subLabel: string;
  suffix?: string;
  duration?: number;
};

const AnimatedCounter: React.FC<Props> = ({
  value,
  subLabel,
  suffix = '+',
  duration = 2,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const counterObj = { val: 0 };

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        once: true,
      },
    });

    timeline.fromTo(
      el,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );

    timeline.to(counterObj, {
      val: value,
      duration,
      ease: 'power1.out',
      onUpdate: () => {
        setCount(Math.floor(counterObj.val));
      },
    }, '<'); // run at same time as fade-in

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [value, duration]);

  return (
    <div ref={ref} className="text-center px-4  ">
      <div className="text-white  text-[42px] md:text-[58px]   lg:text-[80px] font-aktifo font-bold tracking-wide drop-shadow">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-white text-sm mt-2 font-aktifo  text-[12px]  md:text-[12px] lg:text-[18px] uppercase tracking-wider font-semibold ">
        {subLabel}
      </div>
    </div>
  );
};

export default AnimatedCounter;
