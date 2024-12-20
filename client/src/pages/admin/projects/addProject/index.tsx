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
// import { Input } from "@/components/ui/input";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// type FormData = {
//   title: string;
//   description: string;
//   technologies: string[];
//   libraries: string[];
//   logo: string;
//   images: FileList | null;
// };

function Index() {
  // const [title, setTitle] = useState<string>("");
  // const [description, setDescription] = useState<string>("");
  // const [technologiesInput, setTechnologiesInput] = useState<string>(""); // New input state for technologies
  // const [librariesInput, setLibrariesInput] = useState<string>(""); // New input state for libraries
  // const [technologies, setTechnologies] = useState<string[]>([]);
  // const [libraries, setLibraries] = useState<string[]>([]);
  // const [logo, setLogo] = useState<string>("");
  // const [images, setImages] = useState<FileList | null>(null);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!images) {
  //     toast.error("Please upload images.");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("description", description);
  //   formData.append("technologies", JSON.stringify(technologies));
  //   formData.append("libraries", JSON.stringify(libraries));
  //   formData.append("logo", logo);

  //   Array.from(images).forEach((image) => {
  //     formData.append("images", image);
  //   });

  //   fetch("http://127.0.0.1:3000/api/createproject", {
  //     method: "POST",
  //     credentials: "include",
  //     body: formData,
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         toast.error("Failed to create project.");
  //       } else {
  //         toast.success("Project created successfully!", { autoClose: 1000 });
  //       }
  //     })
  //     .catch(() => {
  //       toast.error("An error occurred while submitting.");
  //     });
  // };

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
                  <BreadcrumbLink href="/admin/projects">
                    Projects
                  </BreadcrumbLink>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>New Project</BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {/* <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form> */}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default Index;
