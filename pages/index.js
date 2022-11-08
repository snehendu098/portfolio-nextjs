import Head from "next/head";
import Intro from "../components/Intro";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";
import useSWR from "swr";

async function fetchData(url) {
  const res = await axios.get(url);
  return res.data;
}

export default function Home() {
  const { data, error } = useSWR("/api/projects", fetchData);

  console.log("data", data);

  return (
    <div className="p-5 relative h-screen grid lg:grid-cols-12 grid-cols-1 gap-12 lg:p-10">
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
        <div className="grid lg:grid-cols-2  lg:gap-3 gap-5 lg:place-content-center lg:px-20 pb-20">
          {data &&
            data?.map((item, index) => (
              <ProjectCard index={index} key={index} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
}
