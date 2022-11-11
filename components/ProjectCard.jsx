import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCard = ({ index, item }) => {
  const { id, title, image, link, tech, note } = item;
  console.log(item);

  return (
    <div
      className={`bg-stone-800 inline-flex h-min flex-col items-center relative p-5 rounded-lg ${
        index % 2 !== 0 && "lg:top-10"
      }`}
    >
      <img src={image} alt="image" className="w-full rounded-lg" />
      <div className="w-full">
        <p className="text-poppins font-bold text-xl mt-3">{title}</p>
        {/* Tech Used */}
        <div className="mt-4">
          {tech &&
            tech?.map((item, index) => (
              <p
                key={index}
                className={`font-poppins font-semibold text-zinc-500`}
              >
                {item.name}
              </p>
            ))}
        </div>
        {note && (
          <p className="font-poppins mt-5 font-semibold text-zinc-600">
            {note}
          </p>
        )}
        {link && (
          <a href={link} target="_blank">
            <div className="inline-flex mt-5 items-center hover:text-blue-400 duration-300 cursor-pointer">
              <p className="font-poppins text-semibold text-lg mr-2">
                Live Link
              </p>
              <div className="text-2xl">
                <BiLinkExternal />
              </div>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
