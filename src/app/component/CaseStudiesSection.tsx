// // /components/CaseStudiesSection.tsx
// "use client";

// import React from "react";
// // import { caseStudies } from "../data/caseStudies";
// import Link from "next/link";

// const CaseStudiesSection = () => {
//   return (
//     <section className="relative bg-gradient-to-b from-[#2D1855] to-[#6C54A0] py-20 px-6 text-white">
//       {/* Large background heading */}
//       <h2 className="absolute top-4 left-4 text-[8rem] font-bold text-[#ffffff15] leading-none z-0 select-none">
//         CaseStudies
//       </h2>

//       <div className="relative z-10 max-w-7xl mx-auto text-center mb-12">
//         <h3 className="text-4xl sm:text-5xl font-bold mb-6">Case Studies</h3>
//         <p className="text-lg text-white/80">Explore some of our recent work</p>
//       </div>

//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {caseStudies.map((item) => (
//           <div
//             key={item.slug}
//             className="bg-[#1F103F] rounded-xl overflow-hidden shadow-lg transition transform hover:-translate-y-2 hover:shadow-[#A890CD]"
//           >
//             <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
//             <div className="p-6 text-left">
//               <p className="text-sm text-[#A890CD] font-semibold uppercase">{item.category}</p>
//               <h4 className="text-2xl font-bold my-2">{item.title}</h4>
//               <p className="text-white/80 mb-4">{item.description}</p>
//               <Link
//                 href={`/case-studies/${item.slug}`}
//                 className="inline-block px-4 py-2 bg-[#A890CD] text-white rounded-md text-sm hover:bg-[#8b75b6] transition"
//               >
//                 View Case Study →
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CaseStudiesSection;
