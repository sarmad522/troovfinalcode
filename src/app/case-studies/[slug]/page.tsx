// // /app/case-studies/[slug]/page.tsx
// import { caseStudies } from "../../data/caseStudies";
// import { notFound } from "next/navigation";
// import ReactMarkdown from "react-markdown";


// export default function CaseStudyPage({ params }: { params: { slug: string } }) {
//   const caseStudy = caseStudies.find((item) => item.slug === params.slug);

//   if (!caseStudy) return notFound();

//   return (
//     <section className="bg-[#100727] text-white px-6 py-20 min-h-screen">
//       <div className="max-w-4xl mx-auto">
//         <p className="text-sm text-[#A890CD] uppercase mb-2">{caseStudy.category}</p>
//         <h1 className="text-5xl font-bold mb-4">{caseStudy.title}</h1>
//         <p className="text-lg text-white/80 mb-10">{caseStudy.description}</p>

//         <img
//           src={caseStudy.image}
//           alt={caseStudy.title}
//           className="w-full rounded-lg shadow-lg mb-10"
//         />

//         {/* Markdown content */}
//       <div className="prose prose-invert prose-lg">
//   <ReactMarkdown>{caseStudy.content}</ReactMarkdown>
// </div>


//       </div>
//     </section>
//   );
// }
