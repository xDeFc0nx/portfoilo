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

interface Project {
  images: string[];
  Description: string;
  Libraries: string[];
  Technologies: string[];
}
function Index() {
  const { id } = useParams();

  const [project, setProject] = useState<Project | null>(null);
  useEffect(() => {
    const fetchProject = async () => {
      const response = await fetch(
        `http://127.0.0.1:3000/api/getproject/${id}`
      );
      const data = await response.json();

      setProject(data);

      console.log(data);
    };

    fetchProject();
  }, [id]);
  if (!project) {
    return <div>Loading...</div>; // Loading state
  }
  return (
    <>
      <Carousel className="w-full max-w-3xl m-auto pt-10">
        <CarouselContent>
          {project.images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img
                      src={image}
                      alt={`Project Image ${index + 1}`}
                      className="max-h-full max-w-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default Index;
