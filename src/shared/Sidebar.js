"use client";
import { SidebarData } from "@/lib/SidebarData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-3 flex-col">
      {SidebarData?.map((data) => (
        <Link
          href={data?.url}
          className={`py-[10px] flex gap-[6px] items-center px-[15px] rounded-lg duration-150 hover:bg-white border-2 border-black ${
            pathname === data?.url && "bg-white"
          }`}
        >
          <span className="">{data?.icon}</span>
          {data?.name}
        </Link>
      ))}

      <Link
        href={""}
        className={`py-[10px] text-center mt-5 bg-white justify-center flex gap-[6px] items-center px-[15px] rounded-lg duration-150 hover:bg-white border-2 border-black `}
      >
        Logout
      </Link>
    </div>
  );
};

export default Sidebar;
