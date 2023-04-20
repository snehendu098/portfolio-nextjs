import Head from "next/head";
import Intro from "../components/Intro";
import ProjectCard from "../components/ProjectCard";
import {projects} from "../constants"
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="p-5 relative z-10 h-screen grid lg:grid-cols-12 grid-cols-1 gap-12 lg:p-10">
      <Head>
        <title>Snehendu Roy</title>
        <meta
          name="description"
          content="Just more than a Programmer | Entrepreneurship"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:col-span-5">
        <div className="sticky top-10">
          <Intro />
        </div>
      </div>
      <div className="lg:col-span-7">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="lg:grid-cols-2 lg:gap-3 gap-5 lg:place-content-center lg:px-20 pb-20 inline-grid ">
          {Object.values(projects).length !== 0 && Object.values(projects).map((item, index) => 
            <React.Fragment key={index} ><ProjectCard item={item} index={index} /></ React.Fragment>)}
        </motion.div>
      </div>
    </div>
  );
}
