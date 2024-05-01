import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import ProjectAction from "@/components/ProjectAction";

const Projects = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-[18px] py-[2px] bg-special border-2 border-black px-2 rounded-md mb-3 font-medium  text-primary">
          Team Projects
        </h1>

        <div className="grid grid-cols-3 gap-4">
          <div className=" w-fit shadow-lg bg-special p-3 flex gap-2 rounded-md border-2 border-black">
            <div className="h-full">
              <div className="bg-white border rounded-md border-black py-2 px-3">
                <p className="text-base  leading-5 text-primary font-medium">
                  Here is my title
                </p>
                <span className="text-[13px] leading-4 mt-1 block text-primary opacity-80 font-normal">
                  Here is my description and it's really amazing to see this
                </span>
              </div>
              <div className="bg-c_danger mt-2 p-1 flex items-center gap-2 justify-center text-[14px] font-normal text-white rounded-md border border-black">
                <strong className="text-white font-medium">Deadline:</strong>
                <span className="text-white font-medium">2-24-2024</span>
              </div>
            </div>
            <ProjectAction />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Projects;
