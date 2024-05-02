"use client";
import MyModal from "@/utils/MyModal";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import AddTask from "../ModalsCompo/AddTask";
import useTaskStore from "@/zustand/store";
import { message } from "antd";

const AddNewTask = () => {
  // show error message
  const [messageApi, contextHolder] = message.useMessage();

  // local states
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // show modal ant functionality
  const showModal = () => {
    setTitle("");
    setDescription("");
    setOpen(true);
  };

  // add new task functionality
  const handleOk = () => {
    setLoading(true);

    if (!title || !description) {
      setLoading(false);
      messageApi.error("Please fill the required field.");
      return;
    }

    setTimeout(() => {
      setLoading(false);
      setOpen(false);

      addTask(title, description);
    }, 1000);
  };

  // add task form zustand store
  const addTask = useTaskStore((state) => state.addTask);

  return (
    <>
      {contextHolder}
      <div
        onClick={showModal}
        className="hover:shadow-md hover:bg-opacity-70 mt-4 border-2 py-1 px-[6px] bg-white cursor-pointer duration-150 rounded-[5px] flex items-center gap-[2px] justify-center border-black"
      >
        <FaRegEdit size={14} />{" "}
        <span className="text-[13px] font-medium text-black">Add new task</span>
      </div>

      <MyModal
        content={
          <AddTask
            title={title}
            description={description}
            setTitle={setTitle}
            setDescription={setDescription}
          />
        }
        handleOk={handleOk}
        loading={loading}
        setOpen={setOpen}
        open={open}
        title={"Add new task"}
      />
    </>
  );
};

export default AddNewTask;
