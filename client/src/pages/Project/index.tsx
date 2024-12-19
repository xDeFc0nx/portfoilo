import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import "@/App.css";
interface Project {
  images: string[];
  description: string;
  Libraries: string[];
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
    <div className=" max-w-2xl m-auto md:max-w-4xl xl:max-w-[1280px] gap-16 xl:gap-1  xl:h-screen items-center px  ">
      <Carousel className=" max-w-3xl  m-auto pt-10">
        <CarouselContent>
          {project.images.map((images, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex   w-full h-full ">
                  <img
                    src={`/assets/${images}`}
                    alt={`Project Image ${images}`}
                    className="h-full w-full"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex flex-col xl:col-span-1 items-center pt-24 lx:pt-0   ">
        <span className="text-[30px] leading-[30px] xl:text-[40px] xl:leading-[60px] pb-5  text-center xl:text-left  text-white">
          {project.description}
        </span>
      </div>
    </div>
  );
}

export default Index;
