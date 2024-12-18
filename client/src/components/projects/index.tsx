import { useEffect, useState } from "react";
import Card from "./card";

interface Project {
  ID: number;
  Title: string;
  Logo: string;
  Technologies: string[];
}

function Index() {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("http://127.0.0.1:3000/api/getprojects");
      const data = await response.json();
      setProjects(data.Projects);
    };
    fetchProjects();
  }, []);

  if (!projects || projects.length === 0)
    return <div className="text-white">Loading...</div>;

  return (
    <>
      <div className=" max-w-2xl m-auto md:max-w-4xl snap-start scroll-smooth xl:max-w-[1280px] gap-16 xl:gap-1 min-h-screen xl:h-screen items-center px  ">
        <div className="flex flex-col xl:col-span-1 items-center pt-24 lx:pt-0   ">
          <span className="text-[30px] leading-[30px] xl:text-[40px] xl:leading-[60px] pb-5  text-center xl:text-left  text-white">
            Projects
          </span>
          <div className="grid md:grid-cols-3 gap-16 ">
            <div className="contents xl:col-span-3 items-center  xl:pt-0">
              {projects.map((project) => (
                <Card
                  ID={project.ID}
                  Logo={project.Logo}
                  Title={project.Title}
                  Technologies={project.Technologies}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
