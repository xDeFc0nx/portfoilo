import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
        `http://127.0.0.1:3000/api/getproject/${id}`,
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
      <Card className="justify-items-center pt-44">
        <CardHeader>
          <CardTitle className=" sm:text-2xl md:text-3xl xl:text-4xl justify-center self-center">
            {project.Title}
          </CardTitle>
          <Carousel
            className=" max-w-72 sm:max-w-screen-sm md:max-w-screen-lg  xl:max-w-screen-2xl  m-auto pt-10"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {project.images.map((images, index) => (
                <CarouselItem key={index}>
                  <CardContent className="flex   w-full h-full ">
                    <img
                      src={`/assets/${images}`}
                      alt={`Project Image ${images}`}
                      className="h-full w-full"
                    />
                  </CardContent>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardHeader>
        <CardContent className="max-w-5xl  pt-10 ">
          <ReactMarkdown className="prose prose-sm md:prose-md xl:prose-xl prose-headings:text-white text-white">
            {project.description}
          </ReactMarkdown>
          <CardFooter className="pt-10 grid items-center prose prose-lg prose-headings:text-white text-white   grid-cols-1">
            <span className="text-4xl font-semibold">Technologies</span>
            <div className="flex justify-start">
              {Array.isArray(project.Technologies) &&
                project.Technologies.map((tech, index) => (
                  <span
                    className="flex items-center rounded-full bg-teal-400/20 px-6 py-2 text-xs font-medium leading-5 text-teal-400"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
            </div>
            <span className="text-4xl font-semibold">Libraries</span>
            <div className="flex gap-2">
              {Array.isArray(project.libraries) &&
                project.libraries.map((lib, index) => (
                  <span
                    className="flex items-center rounded-full bg-teal-400/20 px-6 py-2 text-xs font-medium leading-5 text-teal-400"
                    key={index}
                  >
                    {lib}
                  </span>
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
