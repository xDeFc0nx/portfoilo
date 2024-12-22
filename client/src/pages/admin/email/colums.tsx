"use client";

import { ColumnDef } from "@tanstack/react-table";

export interface Emails {
  FullName: string;
  Email: string;
  Message: string;
  CreatedAt: string;
}

export const columns: ColumnDef<Emails>[] = [
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
        </div>
      );
    },
  },
];
