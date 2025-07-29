import CaseStudyCard from "../component/CaseStudyCard";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudiesGrid() {
  return (
    <div className="sm:px-0  sm:px-0  md:px-0 mx-auto ">
      {/* Large translucent heading */}
     <h2 className="text-6xl sm:text-6xl md:text-[120px] lg:text-[200px] font-bold text-center bg-gradient-to-r from-[#6C54A0] to-[#A890CD] bg-clip-text text-transparent select-none   mb-0 md:mb-8  sm:py-[25px]   md:py-[10px] lg:py-[100px]  "   >
  CaseStudies
</h2>
      {/* <h2 className=" inset-x-0 top-0 text-center text-[12vw] font-extrabold text-white pointer-events-none select-none">
        CaseStudies
      </h2> */}

      {/* Grid */}
      <div className="max-w-7xl  w-full   md:mt-[-100px]  lg:mt-[-180px]  md:px-0 mx-auto relative z-10 grid gap-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map(cs => (
          <CaseStudyCard key={cs.slug} item={cs} />
        ))}
      </div>
    </div>
  );
}
