import { knowledge } from "@/app/page";
import React from "react";

const ShowCase = ({
  arr,
}: {
  arr: Array<{ item: React.JSX.Element; name: String }>;
}) => (
  <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-4">
    {arr.map((e: { item: React.JSX.Element; name: String }, i: number) => (
      <div
        key={i}
        className="p-2 flex rounded-lg items-center justify-center px-6 text-lg text-white bg-black border shadow-zinc-900 shadow-lg"
      >
        <div className="text-2xl mr-2">{e.item}</div>
        <p className="text-lg">{e.name}</p>
      </div>
    ))}
  </div>
);

const Knowledge = () => {
  return (
    <>
      <p className="lg:text-4xl text-2xl font-bold mt-14">Knowledge Stack</p>
      <p className="text-lg text-white/70 my-4">
        Here are a few things that I know about
      </p>

      <div className="w-full flex flex-col">
        <div className="mb-8">
          <ShowCase arr={knowledge.slice(0, 2)} />
        </div>
        <div className="mb-8">
          <ShowCase arr={knowledge.slice(2, 8)} />
        </div>
        <ShowCase arr={knowledge.slice(8)} />
      </div>
    </>
  );
};

export default Knowledge;
