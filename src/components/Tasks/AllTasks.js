"use client";
import React from "react";
import Columns from "./Columns";
import { usePathname } from "next/navigation";

const AllTasks = () => {
  const pathname = usePathname();
  return (
    <section
      className={`flex text-primary pb-4 bg-special border-2 border-black rounded-md px-4 ${
        pathname === "/users/all-tasks" ? "" : "mt-5"
      }`}
    >
      <div className="w-full">
        <Columns />
      </div>
    </section>
  );
};

export default AllTasks;
