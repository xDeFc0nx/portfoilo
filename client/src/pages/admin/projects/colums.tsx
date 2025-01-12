"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "react-toastify";

export interface Projects {
  ID: number;
  Title: string;
  description: string;
  CreatedAt: string;
}

export const columns: ColumnDef<Projects>[] = [
  {
    accessorKey: "ID",
    header: "ID",
  },
  {
    accessorKey: "Title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "CreatedAt",
    header: "CreatedAt",
    cell: ({ row }) => {
      const date = new Date(row.getValue("CreatedAt"));
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "short", // Format the date to a short style
        timeStyle: "short", // Format the time to a short style
      }).format(date);

      return (
        <div className="flex items-center">
          <span>{formattedDate}</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={async () => {
                  const projectId = row.getValue("ID");
                  const response = await fetch(
                    `http://127.0.0.1:3000/api/deleteproject/${projectId}`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      credentials: "include",
                    },
                  );
                  if (response.ok) {
                    toast.success("Project deleted");
                  } else {
                    toast.error("Failed to delete project");
                  }
                }}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
