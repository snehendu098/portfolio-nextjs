import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Database } from "lucide-react";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNumpy, SiPandas, SiRedux, SiTailwindcss } from "react-icons/si";
import { FaNodeJs, FaPython, FaReact, FaRobot } from "react-icons/fa6";
import { DiJavascript, DiMongodb } from "react-icons/di";
import { MdScatterPlot } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { GrGraphQl } from "react-icons/gr";

export const implinks = {
  github: "https://github.com/snehendu098",
  linkedin: "https://www.linkedin.com/in/snehendu-roy-6ab419218/",
  fiverr: "https://www.fiverr.com/snehendu?up_rollout=true",
  twitter: "https://twitter.com/RoyDevelops",
};

export const knowledge = [
  { item: <DiJavascript />, name: "JavaScript" },
  { item: <FaPython />, name: "Python" },
  // Web
  { item: <TbBrandNextjs />, name: "Next.Js" },
  { item: <SiTailwindcss />, name: "Tailwind" },
  { item: <FaNodeJs />, name: "Node.Js" },
  { item: <FaReact />, name: "React.Js" },
  { item: <FaReact />, name: "React Native" },
  { item: <SiRedux />, name: "Redux" },
  // Python
  { item: <SiNumpy />, name: "Numpy" },
  { item: <SiPandas />, name: "Pandas" },
  { item: <MdScatterPlot />, name: "Matplotlib" },
  { item: <IoIosLink />, name: "Langchain" },
  { item: <FaRobot />, name: "CrewAI" },
  // database
  { item: <DiMongodb />, name: "MongoDB" },
  { item: <GrGraphQl />, name: "GraphQL" },
  { item: <Database />, name: "SQL" },
];

const Freelance = () => {
  return (
    <>
      <p className="mt-20 text-4xl font-bold">Freelance</p>

      <p className="text-xl mt-6 text-white/70">
        In addition to my programming expertise, I'm also available for{" "}
        <span className="text-blue-500">freelance projects</span>. I'm
        passionate about collaborating with clients to bring their visions to
        life, while continuously expanding my skillset through every new
        challenge. <br />
        <br />
        Have an idea? <span className="text-blue-500">Let's Discuss</span>
      </p>
      <div className="mt-6">
        <Button className="mr-4" asChild>
          <Link target="_blank" href={implinks.fiverr}>
            Fiverr Profile
          </Link>
        </Button>
        <Button className="mr-4" variant={"outline"}>
          <Link target="_blank" href={implinks.linkedin}>
            LinkedIn
          </Link>
        </Button>
        <Button className="mr-4" variant={"outline"}>
          <Link target="_blank" href={implinks.twitter}>
            Twitter
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Freelance;
