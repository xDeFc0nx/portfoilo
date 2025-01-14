import { useEffect, useState } from "react";
import { Emails, columns } from "./colums"; // Adjust the import as needed
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
  try {
    const response = await fetch(`${process.env.VITE_API}/api/getemails`, {
      method: "GET",
      credentials: "include",
    });

    // Log the response status and body for debugging
    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    // Parse the JSON response directly
    const data = await response.json();

    // Assuming the emails are inside the 'emails' property
    return data.emails || []; // Return the emails array, or an empty array if not found
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of an error
  }
}

export default function Index() {
  const [emails, setEmails] = useState<Emails[]>([]);

  useEffect(() => {
    async function fetchEmails() {
      const data = await getData();
      console.log("Fetched emails:", data); // Log the fetched data before setting it
      setEmails(data);
    }

    fetchEmails();
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
                  <BreadcrumbItem>Emails</BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <DataTable columns={columns} data={emails} />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
