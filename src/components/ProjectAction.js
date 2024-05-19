"use client";
import React, { useEffect, useState } from "react";
import { GrView } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Button, Popconfirm } from "antd";
import ProjectEdit from "./ProjectEdit";
import Link from "next/link";
import { deleteHelper } from "@/deleteHelper";
import { PRIVATE_ENDPOINT } from "@/endpoints/Private";

const ProjectAction = ({ project, refetch }) => {
  const { deleteMutation } = deleteHelper();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showPopconfirm = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    const endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}${PRIVATE_ENDPOINT.projects.get_all_projects}/${project?.id}`;
    deleteMutation.mutate(endpoint);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  useEffect(() => {
    if (deleteMutation?.isSuccess) {
      setConfirmLoading(false);
      setOpen(false);
      refetch();
    }
  }, [deleteMutation?.isSuccess]);
  return (
    <div className="flex flex-row flex-wrap sm:flex-col h-full sm:justify-between gap-1">
      <Link
        href={`/users/projects/${project?.id}`}
        className="bg-white border py-1 px-[6px] hover:bg-special cursor-pointer duration-150 shadow-md rounded-[5px] flex items-center justify-center gap-[2px] border-black"
      >
        <GrView size={14} />{" "}
        <span className="text-[13px] font-medium text-black">View</span>
      </Link>
      <ProjectEdit project={project} refetch={refetch} />

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
