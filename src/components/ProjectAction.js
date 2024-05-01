"use client";
import React, { useState } from "react";
import { GrView } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Button, Popconfirm } from "antd";
import ProjectEdit from "./ProjectEdit";
import Link from "next/link";

const ProjectAction = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showPopconfirm = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <div className="flex flex-col h-full justify-between gap-1">
      <Link
        href={"/projects/2"}
        className="bg-white border py-1 px-[6px] hover:bg-special cursor-pointer duration-150 shadow-md rounded-[5px] flex items-center justify-center gap-[2px] border-black"
      >
        <GrView size={14} />{" "}
        <span className="text-[13px] font-medium text-black">View</span>
      </Link>
      <ProjectEdit />

      <Popconfirm
        title="Title"
        description="Are you sure to delete this project?"
        open={open}
        onConfirm={handleOk}
        okButtonProps={{
          loading: confirmLoading,
        }}
        onCancel={handleCancel}
      >
        <div
          onClick={showPopconfirm}
          className="bg-white border py-1 px-[6px] hover:bg-special cursor-pointer duration-150 shadow-md rounded-[5px] flex items-center justify-center gap-[2px] border-black"
        >
          <RiDeleteBin5Line size={14} />{" "}
          <span className="text-[13px] font-medium text-black">Close</span>
        </div>
      </Popconfirm>
    </div>
  );
};

export default ProjectAction;
