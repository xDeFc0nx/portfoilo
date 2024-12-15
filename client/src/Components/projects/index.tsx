import React, { useEffect, useState } from "react";
import Card from "../projects/card";

interface Project {
  ID: number;
  Title: string;
  Img: string;
  Technologies: string;
}

function Index() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getprojects");
        const data = await response.json();
        setProjects(data.Projects);
        console.log("Projects fetched:", data.Projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []); // Add dependency array to prevent infinite loop

  if (!projects || projects.length === 0)
    return <div className="text-white">Loading...</div>;

  return (
    <>
      <div className=" max-w-2xl m-auto md:max-w-4xl xl:max-w-[1280px] gap-16 xl:gap-1 min-h-screen xl:h-screen items-center px  ">
        <div className="flex flex-col xl:col-span-1 items-center pt-24 lx:pt-0   ">
          <span className="text-[30px] leading-[30px] xl:text-[40px] xl:leading-[60px] pb-5  text-center xl:text-left  text-white">
            Projects
          </span>
          <div className="grid md:grid-cols-3 gap-16 ">
            <div className="contents xl:col-span-3 items-center  xl:pt-0">
              {projects.map((project) => (
                <Card
                  ID={project.ID}
                  Img={project.Img}
                  Title={project.Title}
                  Technologis={project.Technologies}
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
