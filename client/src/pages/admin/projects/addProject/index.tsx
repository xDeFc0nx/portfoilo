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

import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CloudUpload, Paperclip } from "lucide-react";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/file-upload";
import { TagsInput } from "@/components/ui/tags-input";
import { useState } from "react";

function Index() {
  const formSchema = z.object({
    Logo: z
      .instanceof(File)
      .refine((file) => file.size > 0, "Logo is required")
      .optional(), // Make Logo optional if a file is uploaded
    Title: z.string().nonempty("Title is required"),
    Technologies: z
      .array(z.string())
      .nonempty("Please specify at least one technology"),
    description: z.string().nonempty("Description is required"),
    libraries: z
      .array(z.string())
      .nonempty("Please specify at least one library"),
    images: z
      .array(
        z
          .instanceof(File)
          .refine((file) => file.size > 0, "Please provide at least one image"),
      )
      .nonempty("Please provide at least one image")
      .optional(), // Make images optional if uploaded
  });

  // Separate state for Logo and Images
  const [logo, setLogo] = useState<File[] | null>(null);
  const [images, setImages] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4, // 4MB max file size
    multiple: true,
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Technologies: ["test"],
      libraries: ["test"],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formData = new FormData();
      if (logo && logo.length > 0) {
        formData.append("Logo", logo[0]);
      }
      if (images && images.length > 0) {
        images.forEach((image) => {
          formData.append("Images[]", image); // Appending each image file
        });
      }
      // Append the values to FormData
      formData.append("Title", values.Title);
      formData.append("description", values.description);
      values.Technologies.forEach((tech) =>
        formData.append("Technologies[]", tech),
      );
      values.libraries.forEach((lib) => formData.append("Libraries[]", lib));

      // Append files (Logo and Images)

      fetch(`${process.env.VITE_API}/apicreateproject`, {
        method: "POST",
        body: formData,

        credentials: "include",
      }).then(async (response) => {
        if (response.ok) {
          toast.success("Project created successfully.");
          window.location.href = `/admin/projects/`;
        } else {
          toast.error("Failed to create project. Please try again.");
        }
      });
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

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

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 max-w-3xl mx-auto py-10"
            >
              {/* Title Field */}
              <FormField
                control={form.control}
                name="Title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Project Title" type="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description Field */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter project description in Markdown"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Technologies Field */}
              <FormField
                control={form.control}
                name="Technologies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your technologies.</FormLabel>
                    <FormControl>
                      <TagsInput
                        value={field.value}
                        onValueChange={field.onChange}
                        placeholder="Enter your tags"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Libraries Field */}
              <FormField
                control={form.control}
                name="libraries"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your Libraries</FormLabel>
                    <FormControl>
                      <TagsInput
                        value={field.value}
                        onValueChange={field.onChange}
                        placeholder="Enter your tags"
                      />
                    </FormControl>
                    <FormDescription>Add tags.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Logo"
                render={() => (
                  <FormItem>
                    <FormLabel>Select Logo</FormLabel>
                    <FormControl>
                      <FileUploader
                        value={logo}
                        onValueChange={setLogo}
                        dropzoneOptions={dropZoneConfig}
                        className="relative bg-background rounded-lg p-2"
                      >
                        <FileInput
                          id="fileInput"
                          className="outline-dashed outline-1 outline-slate-500"
                        >
                          <div className="flex items-center justify-center flex-col p-8 w-full ">
                            <CloudUpload className="text-gray-500 w-10 h-10" />
                            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>
                              &nbsp; or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or GIF
                            </p>
                          </div>
                        </FileInput>
                        <FileUploaderContent>
                          {logo &&
                            logo.length > 0 &&
                            logo.map((file, i) => (
                              <FileUploaderItem key={i} index={i}>
                                <Paperclip className="h-4 w-4 stroke-current" />
                                <span>{file.name}</span>
                              </FileUploaderItem>
                            ))}
                        </FileUploaderContent>
                      </FileUploader>
                    </FormControl>
                    <FormDescription>Select a file to upload.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="images"
                render={() => (
                  <FormItem>
                    <FormLabel>Select Images</FormLabel>
                    <FormControl>
                      <FileUploader
                        value={images}
                        onValueChange={setImages}
                        dropzoneOptions={dropZoneConfig}
                        className="relative bg-background rounded-lg p-2"
                      >
                        <FileInput
                          id="fileInput"
                          className="outline-dashed outline-1 outline-slate-500"
                        >
                          <div className="flex items-center justify-center flex-col p-8 w-full ">
                            <CloudUpload className="text-gray-500 w-10 h-10" />
                            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>
                              &nbsp; or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or GIF
                            </p>
                          </div>
                        </FileInput>
                        <FileUploaderContent>
                          {images &&
                            images.length > 0 &&
                            images.map((file, i) => (
                              <FileUploaderItem key={i} index={i}>
                                <Paperclip className="h-4 w-4 stroke-current" />
                                <span>{file.name}</span>
                              </FileUploaderItem>
                            ))}
                        </FileUploaderContent>
                      </FileUploader>
                    </FormControl>
                    <FormDescription>Select a file to upload.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default Index;
