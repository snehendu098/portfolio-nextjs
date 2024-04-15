import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { implinks } from "./Freelance";

const Intro = () => {
  return (
    <>
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
        <Button asChild>
          <Link target="_blank" href={implinks.github}>
            See Projects
          </Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link target="_blank" href={"mailto:roysnehendu1029@gmail.com"}>
            Contact Me
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Intro;
