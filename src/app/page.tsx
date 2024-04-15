import React from "react";

import { Spotlight } from "@/components/ui/Spotlight";
import { LinkedinIcon } from "lucide-react";
import { PiGithubLogoBold } from "react-icons/pi";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

const knowledge = [
  { item: <TbBrandNextjs />, name: "Next Js" },
  { item: <SiTailwindcss />, name: "Tailwind CSS" },
];

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center w-full pb-24 px-6 md:px-0">
      <div className="h-screen w-screen flex md:items-center md:justify-center fixed overflow-hidden">
        <div className="w-full bg-dot-white/[0.2] h-full relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
        </div>
      </div>
      {/* min */}
      <div className="z-40 w-full max-w-2xl pt-10">
        {/* head */}
        <div className="flex fixed top-10 space-x-6">
          <img
            className="inline-block h-10 w-10 rounded-full"
            src="/roy.jpg"
            alt=""
          ></img>

          <h1 className="text-4xl text-gray-200 font-bold">
            Snehendu <span className="text-blue-500">Roy</span>
          </h1>
        </div>

        <div className="w-full flex flex-col mt-24">
          {/* intro and some text */}
          <p className="text-lg text-white/70">
            I'm a programmer with a passion for turning complex problems into
            elegant solutions. I specialize in full-stack{" "}
            <span className="text-blue-500  font-semibold">
              Fullstack Web Developement, App developement
            </span>{" "}
            and even a sprinkle of{" "}
            <span className="text-blue-500 font-semibold ">Generative AI</span>.
            Let's build something awesome together.
          </p>
          <div className="mt-10 w-full flex space-x-6">
            <Button>See Projects</Button>
            <Button variant={"outline"}>Contact Me</Button>
          </div>

          {/* skills showcase */}

          <p className="lg:text-4xl text-2xl font-bold mt-14">
            Knowledge Stack
          </p>
          <div className="w-full flex space-x-4">
            {knowledge.map(
              (e: { item: React.JSX.Element; name: String }, i: number) => (
                <div
                  key={i}
                  className="p-2 mt-4 flex rounded-lg items-center justify-center px-6 text-lg text-white bg-gray-200/10 shadow-slate-900 shadow-lg"
                >
                  <div className="text-2xl mr-2">{e.item}</div>
                  <p>{e.name}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
