import React, { useState } from "react";
import {AnimatePresence, motion} from "framer-motion"
import ProjectCardDetails from "./ProjectDetailsCard";

const items = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const ProjectCard = ({ index, item }) => {
  const { id, title, image, desc } = item
  const [toggle, setToggle] = useState(false)

  return (
    <React.Fragment>
    <motion.div
      className={`bg-stone-900 relative hover:bg-stone-800 shadow-md duration-500 inline-flex h-min cursor-pointer flex-col items-center p-5 ${
        index % 2 !== 0 && "lg:top-10"
      }`}
        variants={items}
        onClick={()=>setToggle(true)}
    whileHover={{scale: 1.03, transition: {duration: 0.12}}}
    >
      <img src={image} alt="image" className="w-full" />
      <div className="w-full">
        <p className="text-poppins font-bold text-xl mt-3">{title}</p>
        <div className="mt-4">
             <p  className={`font-poppins font-semibold text-zinc-500`}
              >
                {desc}
              </p>
        </div>
      </div>
    </motion.div>

      {/*TODO*/}
      <AnimatePresence>
        {toggle &&
        <motion.div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center p-2 lg:p-10 overflow-y-auto">
          <ProjectCardDetails id={id} setToggle={setToggle}  />
        </motion.div>

        }
      </AnimatePresence>
    </React.Fragment>
  );
};

export default ProjectCard;
