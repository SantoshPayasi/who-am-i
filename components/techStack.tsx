import { cn } from "@/lib/utils";
// import Marquee from "@/components/magicui/marquee";
import TechStackLinks from "@/data/IconImports";
import Image from "next/image";
import dynamic from "next/dynamic";
const Marquee = dynamic(()=>import("@/components/magicui/marquee"),{
  loading:()=><div>Loading...</div>
})    


const firstRow = TechStackLinks.slice(0, TechStackLinks.length / 2);
const secondRow = TechStackLinks.slice(TechStackLinks.length / 2);

const TechStackCard = ({
  Name,
  ImageLink
}: {
  Name: string;
  ImageLink: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
    
        <Image className="rounded-full" width="32" height="32" alt="" src={ImageLink} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {Name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};

const TechStackCarousal = () => {
  return (
    <div>
        <h1 className="heading mb-5">
        A small selection of{" "}
        <span className="text-purple">Tech Stack</span>
      </h1>
       <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
        
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((StackDetail) => (
            <TechStackCard key={StackDetail.Name} {...StackDetail} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((StackDetail) => (
            <TechStackCard key={StackDetail.Name} {...StackDetail} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
   
  );
};

export default TechStackCarousal;
