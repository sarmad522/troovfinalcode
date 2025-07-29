'use client'

import { useEffect } from "react";
import gsap from 'gsap';
import FlipCard from "../component/FlipCard";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import PartnersSlider from "../component/PartnersSlider";
import MissionScrollText from "../component/MissionScrollText";
import Footer from "../component/Footer";
import ScrollSmoother from 'gsap/dist/ScrollSmoother';
import HeroSection from '../component/HeroSection';
import ScrollGradientText from '../component/ScrollGradientText';
import ScrollTextFade from "../component/ScrollTextFade";
import AnimatedCounter from "./../component/AnimatedCounter";
import SectionTabs from "../component/SectionTabs";
import ContactSection from "../component/ContactSection";
import WhereWeWork from "../component/WhereWeWork";

export default function AboutPage() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


  useEffect(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 3.5,
      effects: true,

      speed: 0.8,
    });
  }, []);
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

  const paragraph =
    'With a core design and development team based in Karachi, and creative partners in Houston and London, we work across time zones to deliver results fast. Wherever you are, we’re only a message away.';
  const tabData = [
    {
      image1: '/images/tabsimages.png',
      title1: 'Your Success, Our Mission',
      subtitle1: 'We strive to provide the best solutions that help you grow',
      image2: '/images/tabssection2.png',
      title2: 'Celebrating Wins',
      subtitle2: 'Every milestone is a shared victory.',
    },
    {
      image1: '/images/tabsimages.png',
      title1: 'Creativity without limits',
      subtitle1: 'At throov we push boundaries to create work that stands out.',
      image2: '/images/tabssection2.png',
      title2: 'Client Workshops',
      subtitle2: 'Co‑creating with our partners.',
    },
    {
      image1: '/images/tabsimages.png',
      title1: 'Remote Synergy',
      subtitle1: 'Distance never limits impact.',
      image2: '/images/tabssection2.png',
      title2: 'Strategic Planning',
      subtitle2: 'Mapping every step to success.',
    },
    {
      image1: '/images/tabsimages.png',
      title1: 'Remote Synergy',
      subtitle1: 'Distance never limits impact.',
      image2: '/images/tabssection2.png',
      title2: 'Strategic Planning',
      subtitle2: 'Mapping every step to success.',
    },
  ];
  // Use it like:





  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection
            description="We are a passionate team of designers, strategists, and technologists driven to build exceptional digital experiences."
            primaryBtnText="Get in Touch"
            primaryBtnLink="/contact"
            secondaryBtnText="Our Services"
            secondaryBtnLink="/services"
            mainImage="/images/about.png"
            gifImage='/images/videoMain.gif'
            spinningImage='/images/imagebanner.png'
            leftOverlay='/images/heroleftlayer.png'
            rightOverlay='/images/heroright.png'

          />
    <section
  style={{
    background: `
      linear-gradient(to bottom, 
        rgba(0, 0, 0, 1) 0%, 
        rgba(0, 0, 0, 0.8) 5%, 
        rgba(0, 0, 0, 0.0) 15%, 
        rgba(0, 0, 0, 0.0) 85%, 
        rgba(0, 0, 0, 0.8) 95%, 
        rgba(0, 0, 0, 1) 100%
      ),
      linear-gradient(90deg, #6C54A0 50%, black 50%)
    `,
    backgroundBlendMode: 'normal',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%, 100% 100%',
    backgroundPosition: 'top, top',
    color: 'white',
  }}
>
            <ScrollGradientText texts={['TheThroovOrigin']}
              repeat={2}
              height="40vh"
              scrollSpeed={110000}
            />
             
            <ScrollTextFade
              text="Throov is a creative studio built on one belief: bold ideas deserve intentional design. From startups in Houston to enterprises in London, we craft brands, apps, and websites that are as functional as they are beautiful bringing clarity to complexity through purposeful design and real world impact."
            />


            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 sm:gap-x-6 text-center">
              <AnimatedCounter value={1300} subLabel="Completed Projects" />
              <AnimatedCounter value={350} subLabel="Designers & Developers" />
              <AnimatedCounter value={600} subLabel="Satisfied Clients" />
            </div>

            <ScrollGradientText texts={['HowWeWorkHowWeWork']}
              repeat={2}
              height="40vh"
              scrollSpeed={110000}
            />



            <main className="flex items-center justify-center flex-wrap gap-8  px-2 md:py-10   md:px-5 ">
              <FlipCard
                title="Ideate"
                items={[
                  "Creative Direction",
                  "Design Sprints",
                  "Product Validation Sprint",
                  "User Research and Testing",
                  "Prototypes",
                  "Minimum Viable Products",
                ]}
                frontImage="/images/wprdout.png"
                backImage="/images/blue.png"
              />
              <FlipCard
                title="Develop"
                items={[
                  "Frontend Development",
                  "Backend Development",
                  "CMS Implementation",
                  "Accessibility",
                  "Interaction and Motion",
                  "Lowcode Development",

                ]}
                frontImage="/images/work2image.png"
                backImage="/images/blue.png"
              />
              <FlipCard
                title="Develop"
                items={[
                  "Frontend Development",
                  "Backend Development",
                  "CMS Implementation",
                  "Accessibility",
                  "Interaction and Motion",
                  "Lowcode Development",
                ]}
                frontImage="/images/worflikp.png"
                backImage="/images/blue.png"
              />
            </main>



          </section>
          <ScrollGradientText texts={['OurPeople&Culture']}
            repeat={2}
            height="40vh"
            scrollSpeed={110000}
          />
          {/* <ScrollGradientText
        text="HowWeWorkHowWeWork"
        fontSizeVw={15}
        scrollDistance={2500}
        fromColor="#6C54A0"
        toColor="#FFFFFF"
      /> */}
          {/* <WhereWeWork/> */}
             <MissionScrollText
  text="At Throov, you’re not just another pixel pusher or code monkey. You’re part of a team that’s redefining how digital ideas are brought to life with bold design, sharp strategy and deep collaboration. We value impact over hours, passion over titles and growth over perfection."
  rightImage="/images/right.png"
  leftImage="/images/left.png"
  fontSize="text-2xl md:text-2xl"
  textColor="text-white"
  fontWeight="font-bold"
/>
          <SectionTabs items={tabData} />
          <ScrollGradientText texts={['Globally based. locally rooted.']}
              repeat={2}
              height="40vh"
              scrollSpeed={110000}
            />
          <WhereWeWork
            title=" "
            titleSize="text-[36px] md:text-[75px] lg:text-[150px]"
            paragraph={paragraph}
            locations={locations}
            showCaseStudies={false}
            showContactSection
          />

          {/* <ContactSection/> */}
          <PartnersSlider />
          <Footer />

        </div></div>
    </>
  );
}
