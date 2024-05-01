import MyModal from "@/utils/MyModal";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import EditProject from "./ModalsCompo/EditProject";
import { useMutation } from "react-query";
import { updateHelper } from "@/updateHelper";
import { PRIVATE_ENDPOINT } from "@/endpoints/Private";

const ProjectEdit = ({ project, refetch }) => {
  // react query mutation
  const { mutate, isLoading, isError } = useMutation(updateHelper);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  // local states
  const [title, setTitle] = useState(project?.title);
  const [description, setDescription] = useState(project?.description);

  const handleOk = () => {
    setLoading(true);
    const myData = {
      title: title,
      description: description,
    };

    const endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}${PRIVATE_ENDPOINT.projects.get_all_projects}/${project?.id}`;

    mutate({
      endpoint: endpoint,
      data: myData,
    });
  };

  useEffect(() => {
    if (!isLoading) {
      setLoading(false);
      setOpen(false);
      refetch();
    }
  }, [isLoading]);

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
        content={
          <EditProject
            setTitle={setTitle}
            setDescription={setDescription}
            title={title}
            description={description}
          />
        }
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
