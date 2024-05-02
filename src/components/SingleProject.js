import React from "react";
import ProjectAction from "@/components/ProjectAction";
import NotAvailable from "@/utils/NotAvailable";

const SingleProject = ({ project, refetch }) => {
  return (
    <div className=" w-full shadow-lg bg-special p-3 flex flex-col sm:flex-row gap-2 justify-between rounded-md border-2 border-black">
      <div className="h-full w-full">
        <div className="bg-white border rounded-md border-black py-2 px-3">
          <p className="text-base leading-5 text-primary font-medium">
            {project?.title ? (
              `${project?.title?.slice(0, 15)}${
                project?.title?.length > 15 ? "..." : ""
              }`
            ) : (
              <NotAvailable />
            )}
          </p>
          <span className="text-[13px] leading-4 mt-1 block text-primary opacity-80 font-normal">
            {project?.description ? (
              `${project?.description?.slice(0, 35)}${
                project?.description?.length > 35 ? "..." : ""
              }`
            ) : (
              <NotAvailable />
            )}
          </span>
        </div>
        <div className="bg-c_danger mt-2 p-1 flex items-center gap-2 justify-center text-[14px] font-normal text-white rounded-md border border-black">
          <strong className="text-white font-medium hidden sm:flex">
            Deadline:
          </strong>
          <span className="text-white font-medium">
            {project?.deadline || <NotAvailable />}
          </span>
        </div>
      </div>
      <ProjectAction project={project} refetch={refetch} />
    </div>
  );
};

export default SingleProject;
