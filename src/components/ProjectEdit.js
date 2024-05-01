import MyModal from "@/utils/MyModal";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import EditProject from "./ModalsCompo/EditProject";

const ProjectEdit = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  return (
    <>
      <div
        onClick={showModal}
        className="bg-white border py-1 px-[6px] hover:bg-special cursor-pointer duration-150 shadow-md rounded-[5px] flex items-center gap-[2px] justify-center border-black"
      >
        <FaRegEdit size={14} />{" "}
        <span className="text-[13px] font-medium text-black">Edit</span>
      </div>

      <MyModal
        content={<EditProject />}
        handleOk={handleOk}
        loading={loading}
        setOpen={setOpen}
        open={open}
        title={"Edit project"}
      />
    </>
  );
};

export default ProjectEdit;
