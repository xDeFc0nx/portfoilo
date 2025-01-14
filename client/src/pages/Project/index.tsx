import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import "@/App.css";
import Contact from "@/components/ui/contact";
interface Project {
  Title: string;
  images: string[];
  description: string;
  libraries: string[];
  Technologies: string[];
}
function Index() {
  const { id } = useParams();

  const [project, setProject] = useState<Project | null>(null);
  useEffect(() => {
    const fetchProject = async () => {
      const response = await fetch(
        `${process.env.VITE_API}/api/getproject/${id}`,
      );
      const data = await response.json();

      setProject(data);
    };

    fetchProject();
  }, [id]);
  if (!project) {
    return <div>Loading...</div>; // Loading state
  }
  return (
    <div className=" max-w-2xl m-auto md:max-w-4xl xl:max-w-screen-2xl gap-16 xl:gap-1  xl:h-screen items-center px  ">
      <Card className="justify-items-center pt-44 border-none">
        <CardContent className="max-w-5xl  pt-10 ">
          <ReactMarkdown className="prose prose-sm md:prose-md xl:prose-xl prose-headings:text-white text-white">
            {project.description}
          </ReactMarkdown>
          <CardFooter className=" p-0 grid items-center prose prose-lg prose-headings:text-white text-white   grid-cols-1">
            <h3 className="pt-10">Technologies</h3>
            <div className="flex justify-start">
              {Array.isArray(project.Technologies) &&
                project.Technologies.map((tech, index) => (
                  <h5
                    className="flex items-center rounded-full bg-teal-400/20 px-3 py-2   text-teal-400"
                    key={index}
                  >
                    {tech}
                  </h5>
                ))}
            </div>
            <h3>Libraries</h3>
            <div className="flex gap-2">
              {Array.isArray(project.libraries) &&
                project.libraries.map((lib, index) => (
                  <h5
                    className="flex items-center rounded-full bg-teal-400/20 px-3  py-2  text-teal-400"
                    key={index}
                  >
                    {lib}
                  </h5>
                ))}
            </div>
          </CardFooter>
        </CardContent>
      </Card>
      <Contact />
    </div>
  );
}

export default Index;
