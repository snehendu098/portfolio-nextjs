import { motion } from "framer-motion"
import {projects} from "../constants"
import {AiFillGithub, } from "react-icons/ai"
import {FaExternalLinkAlt} from "react-icons/fa"
import {IoClose} from "react-icons/io5"

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
}
  
const items = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function ProjectCardDetails({id, setToggle}) {


  const el = projects[`${id}`]

  return <motion.div initial={{scale: 0}} whileInView={{scale: 1}} exit={{opacity: 0}} transition={{type: "spring", duration: 1}} className="max-h-full py-6 px-4 w-full overflow-y-auto bg-[#111]/80 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl border border-gray-200/80 flex items-center justify-center">
    
    <div className="max-w-md w-full mt-10">
      <h1 className="font-bold mb-4 mt-20">
        {el.title}
      </h1>
      <img src={el.image} className="max-w-md w-full mb-4" />
      <motion.div variants={container}
    initial="hidden"
    animate="visible" className="w-full flex flex-wrap">
        {el.tech.map(item => <motion.p key={item} varients={items} transition={{delay: 1}} className="px-2 rounded-full bg-yellow-500 mr-6 mt-4" >{item}</motion.p>)}
      </motion.div>

      <motion.p className="mt-4 font-bold text-stone-500">{el.desc}</motion.p>
      {el?.note && 
      <motion.p className="mt-4 font-bold text-stone-600">NOTE: {el.note}</motion.p>

      }
      <div className="w-full flex flex-wrap mt-4">
        <AiFillGithub className="text-3xl mr-5 cursor-pointer duration-500 hover:text-yellow-500 font-bold" />
        {!el.inProgress &&
        <FaExternalLinkAlt className="text-3xl cursor-pointer duration-500 hover:text-yellow-500 font-bold" />

        }
      </div>
    </div>
    <div onClick={() => setToggle(false)} className="absolute top-5 right-2 bg-yellow-500 duration-500 rounded-md p-2 cursor-pointer hover:bg-yellow-900 ">
      <IoClose className="text-3xl" />
    </div>
  </motion.div>
}
