"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { DataTable } from "./dataTable";

export interface Projects {
  FullName: string;
  Email: string;
  Message: string;
}

export const columns: ColumnDef<Projects>[] = [
  {
    accessorKey: "FullName",
    header: "FullName",
  },
  {
    accessorKey: "Email",
    header: "Email",
  },
  {
    accessorKey: "Message",
    header: "Message",
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
            <DropdownMenuContent align="end"></DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export default function EmailPage() {
  const { id } = useParams();
  const [project, setProject] = useState<Projects | null>(null);

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
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      {/* Pass `columns` and `project` data into your DataTable */}
      <DataTable columns={columns} data={[project]} />
    </div>
  );
}
