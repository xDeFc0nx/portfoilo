import { useEffect, useState } from "react";
import { Projects, columns } from "./colums";
import { DataTable } from "./dataTable";
import { AppSidebar } from "@/components/ui/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import "@/App.css";
async function getData() {
  const response = await fetch(`${process.env.VITE_API}/api/getprojects`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default function Index() {
  const [data, setData] = useState<Projects[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result.Projects);
    };

    fetchData();
  }, []);

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/admin/dashboard">
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>Projects</BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <DataTable columns={columns} data={data} />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
