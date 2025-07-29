import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "../data/caseStudies";
import '../globals.css'
type Props = { item: CaseStudy };

export default function CaseStudyCard({ item }: Props) {
  return (
    <div className="  w-[100%] rounded-2xl   hover:-translate-y-1 hover:shadow-xl transition   sm:p-0 md:p-4 flex flex-col mb-5   md:mb-5">
      <Image
        src={item.cover}
        alt={item.title}
        width={300}
        height={300}
        className="rounded-xl h-75 w-full object-cover mb-4"
        priority
      />
      <span className="font-aktifo text-start text-white uppercase text-xs tracking-widest ">
        {item.category}
      </span>

      <h3 className=" font-aktifo text-start text-2xl font-semibold text-white mt-2">{item.title}</h3>
      <p className="  font-aktifo lg:w-[72%] font-aktifo text-start text-sm  text-[16px]  text-violet-100 mt-1 flex-grow">{item.description}</p>

      <Link
        href={`/case-studies/${item.slug}`}
        className="mt-4 inline-block self-start bg-[#6C54A0] text-white/500 text-sm font-medium px-4 py-2 rounded-md"
      >
        View Case Study →
      </Link>
    </div>
  );
}
