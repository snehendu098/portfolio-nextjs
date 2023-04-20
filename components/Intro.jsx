import Link from "next/link";
import React from "react";
import { AiFillTwitterCircle, AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.div 
          initial={{opacity:0}} animate={{opacity: 1}}


      className="relative lg:20 lg:h-[70vh]">
      <div className="lg:px-10">
        <motion.h1 
        >
          Hello 👋, I am <br />
        </motion.h1>
        <h1
        > 

        Snehendu Roy</h1>
        <p


          className="text-zinc-500 mt-5 font-bold md:mt-14 lg:pr-8">
          Welcome to my <span>personal website</span>. I am just a{" "}
          <span className="text-zinc-300">curious programmer</span> who is{" "}
          <span className="text-zinc-300">interested in Entrepreneurship</span>
          <br />
          <br />
          Here, I showcase all of my cool{" "}
          <span className="text-zinc-300">projects</span> and write{" "}
          <span className="text-zinc-300">blog</span> articles
        </p>
        <div className={`flex items-center font-bold mt-5 md:mt-10`}>
          <p>01</p>
          <p className="mx-3">PROJECTS</p>
        </div>
        <Link target={"_blank"} href={"https://tech.snehenduroy.in/"}>
          <div
            className={`flex text-zinc-500 items-center font-bold duration-500 hover:text-zinc-300`}
          >
            <p>02</p>
            <p className="mx-3">BLOGS</p>
          </div>
        </Link>
        <div className="lg:relative bottom-0 mt-7">
          {/* Twitter */}
          <Link target={"_blank"} href={"https://twitter.com/RoyDevelops"}>
            <div className="inline-block text-xl bg-zinc-600 rounded-full mr-7">
              <div className="flex items-center my-1">
                <AiFillTwitterCircle className="mx-1 text-4xl" />
                <p className="mr-5 mx-3">Twitter</p>
              </div>
            </div>
          </Link>
          {/* Github */}
          <Link target={"_blank"} href={"https://github.com/snehendu098/"}>
            <div className="inline-block text-xl bg-zinc-600 rounded-full mr-5 mt-5">
              <div className="flex items-center my-1">
                <AiOutlineGithub className="mx-1 text-4xl" />
                <p className="mr-5 mx-3">GitHub</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;
