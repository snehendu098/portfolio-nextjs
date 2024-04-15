import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { implinks as links } from "@/app/page";

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
      <div className="mt-6 space-x-4">
        <Button asChild>
          <Link target="_blank" href={links.fiverr}>
            Fiverr Profile
          </Link>
        </Button>
        <Button variant={"outline"}>
          <Link target="_blank" href={links.linkedin}>
            LinkedIn
          </Link>
        </Button>
        <Button variant={"outline"}>
          <Link target="_blank" href={links.twitter}>
            Twitter
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Freelance;
