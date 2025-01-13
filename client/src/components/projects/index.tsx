import { useEffect, useState } from "react";
import Card from "./card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
interface Project {
  ID: number;
  Title: string;
  Logo: string;
  Technologies: string[];
}

function Index() {
  const [projects, setProjects] = useState<Project[]>([]);
  const rowsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);

  const fetchProjects = async () => {
    const response = await fetch("https://nehar.online/api/getprojects");
    const data = await response.json();
    setProjects(data.Projects);
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  if (!projects || projects.length === 0)
    return <div className="text-white">Loading...</div>;

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - rowsPerPage);
      setEndIndex(endIndex - rowsPerPage);
    }
  };

  const handleNext = () => {
    if (endIndex < projects.length) {
      setStartIndex(startIndex + rowsPerPage);
      setEndIndex(endIndex + rowsPerPage);
    }
  };
  return (
    <>
      <div className="max-w-2xl m-auto md:max-w-4xl snap-start scroll-smooth xl:max-w-[1280px] gap-16 xl:gap-1 min-h-screen xl:h-screen items-center px">
        <div className="flex flex-col xl:col-span-1 items-center pt-24 lx:pt-0">
          <span className="text-[30px] leading-[30px] xl:text-[40px] xl:leading-[60px] pb-5 text-center xl:text-left text-white">
            Projects
          </span>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="contents xl:col-span-3 items-center xl:pt-0">
              {projects.slice(startIndex, endIndex).map((project) => (
                <Card
                  key={project.ID}
                  ID={project.ID}
                  Logo={project.Logo}
                  Title={project.Title}
                  Technologies={project.Technologies}
                />
              ))}
            </div>
          </div>
          <Pagination className="pt-5">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className={
                    startIndex === 0
                      ? "pointer-events-none opacity-50"
                      : undefined
                  }
                  href="#"
                  onClick={handlePrevious}
                />
              </PaginationItem>

              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>

              <PaginationItem>
                <PaginationNext
                  className={
                    endIndex >= projects.length
                      ? "pointer-events-none opacity-50"
                      : undefined
                  }
                  href="#"
                  onClick={handleNext}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
}

export default Index;
