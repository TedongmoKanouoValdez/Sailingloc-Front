"use client";
import React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {Image} from "@heroui/image";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    photo:
      "https://res.cloudinary.com/dluqkutu8/image/upload/v1751020067/sailing-ship-sea-sunlight-cloudy-sky-daytime_1_ztf587.jpg",
    type: "Voilier",
    zone: "Méditerranée",
    note: "Pour naviguer en famille",
  },
  {
    id: "3u1reuv4",
    photo:
      "https://res.cloudinary.com/dluqkutu8/image/upload/v1751020067/sailing-ship-sea-sunlight-cloudy-sky-daytime_1_ztf587.jpg",
    type: "Catamaran",
    zone: "Bretagne",
    note: "Idéal pour week-ends",
  },
  {
    id: "derv1ws0",
    photo:
      "https://res.cloudinary.com/dluqkutu8/image/upload/v1751020067/sailing-ship-sea-sunlight-cloudy-sky-daytime_1_ztf587.jpg",
    type: "Yacht",
    zone: "Îles grecques",
    note: "Luxe et confort",
  },
  {
    id: "5kma53ae",
    photo:
      "https://res.cloudinary.com/dluqkutu8/image/upload/v1751020067/sailing-ship-sea-sunlight-cloudy-sky-daytime_1_ztf587.jpg",
    type: "Bateau à moteur",
    zone: "Côte d&apos;Azur",
    note: "Rapide et maniable",
  },
  {
    id: "bhqecj4p",
    photo:
      "https://res.cloudinary.com/dluqkutu8/image/upload/v1751020067/sailing-ship-sea-sunlight-cloudy-sky-daytime_1_ztf587.jpg",
    type: "Péniche",
    zone: "Canaux de France",
    note: "Calme et détente",
  },
];

export type Payment = {
  id: string;
  photo: string;
  type: string;
  zone: string;
  note: string;
};
export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        aria-label="Select all"
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "photo",
    header: "🛥️",
    cell: ({ row }) => (
      <div className="w-12 h-12 bg-gray-200 rounded overflow-hidden flex items-center justify-center">
        {row.original.photo ? (
          <Image width={100} height={100} alt="Bateaux" className="w-full h-full object-cover" src={row.original.photo} />
        ) : (
          <span className="text-xl">🛥️</span>
        )}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("type")}</div>,
  },
  {
    accessorKey: "zone",
    header: "Zone",
    cell: ({ row }) => <div className="text-sm text-muted-foreground">{row.getValue("zone")}</div>,
  },
  {
    accessorKey: "note",
    header: "Note",
    cell: ({ row }) => (
      <div className="text-sm italic text-muted-foreground">{row.getValue("note")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-8 w-8 p-0" variant="ghost">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Retirer de la liste</DropdownMenuItem>
            <DropdownMenuItem>Voir le bateau</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const BateauPrefere = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          className="max-w-sm"
          placeholder="Filter type..."
          value={(table.getColumn("type")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("type")?.setFilterValue(event.target.value)}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto" variant="outline">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    checked={column.getIsVisible()}
                    className="capitalize"
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell className="h-24 text-center" colSpan={columns.length}>
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            disabled={!table.getCanPreviousPage()}
            size="sm"
            variant="outline"
            onClick={() => table.previousPage()}
          >
            Previous
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            size="sm"
            variant="outline"
            onClick={() => table.nextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
