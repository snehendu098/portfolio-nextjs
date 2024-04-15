import React from "react";

import { Spotlight } from "@/components/ui/Spotlight";
import { Database } from "lucide-react";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNumpy, SiPandas, SiRedux, SiTailwindcss } from "react-icons/si";
import { FaNodeJs, FaPython, FaReact, FaRobot } from "react-icons/fa6";
import { DiJavascript, DiMongodb } from "react-icons/di";
import { MdScatterPlot } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { GrGraphQl } from "react-icons/gr";
import type { Metadata } from "next";

import Freelance from "@/components/home/Freelance";
import Knowledge from "@/components/home/Knowledge";
import Intro from "@/components/home/Intro";

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

export const metadata: Metadata = {
  title: "Snehendu Roy",
  description: "A programmer with entrepreneurial Goals",
};

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center w-full px-6 md:px-0">
      <div className="h-screen w-screen flex md:items-center md:justify-center fixed overflow-hidden">
        <div className="w-full bg-dot-white/[0.2] h-full relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
        </div>
      </div>
      {/* main */}
      <div className="z-40 w-full pb-20 max-w-2xl pt-10">
        {/* head */}
        <div className="flex space-x-6">
          <img
            className="inline-block h-10 w-10 rounded-full"
            src="/roy.jpg"
            alt=""
          ></img>

          <h1 className="text-4xl text-gray-200 font-bold">
            Snehendu <span className="text-blue-500">Roy</span>
          </h1>
        </div>

        <div className="w-full flex flex-col mt-16">
          {/* intro and some text */}
          <Intro />

          {/* skills showcase */}

          <Knowledge />

          {/* freelance */}
          <Freelance />
        </div>
      </div>
    </main>
  );
}
