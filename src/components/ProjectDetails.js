import React from "react";
import { Alert, Space } from "antd";
import NotAvailable from "@/utils/NotAvailable";

const ProjectDetails = ({ projectDetails }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 border-2 pt-3 border-black bg-special py-2 pb-3 px-[14px] rounded-md">
      <div className="">
        <p className="text-base bg-white px-2 rounded-[4px] border border-black py-1 leading-5 text-primary font-medium">
          {projectDetails?.title ? (
            `${projectDetails?.title?.slice(0, 28)}${
              projectDetails?.title?.length > 28 ? "..." : ""
            }`
          ) : (
            <NotAvailable />
          )}
        </p>
        <span className="text-[13px] bg-white py-1 px-2 border border-black rounded-[4px] leading-4 mt-[5px] block text-primary opacity-70 font-normal">
          {projectDetails?.description ? (
            `${projectDetails?.description?.slice(0, 105)}${
              projectDetails?.description?.length > 105 ? "..." : ""
            }`
          ) : (
            <NotAvailable />
          )}
        </span>
      </div>
      <div>
        <p className="text-base bg-white px-2 rounded-[4px] border border-black py-1 leading-5 text-primary font-medium">
          Team Members
        </p>
        <div className="bg-special px-2 mt-[5px] py-2 pt-[6px] pb-[7px] flex flex-wrap gap-1 rounded-[4px] border border-black">
          {projectDetails?.teams?.length > 0 ? (
            projectDetails?.teams?.map((member) => (
              <span
                key={member?.id}
                className="bg-white py-[3px] px-2 rounded-[3px] border border-black block w-fit text-[12px]"
              >
                {member?.name}
              </span>
            ))
          ) : (
            <span className="text-[14px] text-secondary text-center">
              No team members assigned
            </span>
          )}
        </div>
      </div>

      <div>
        <p className="text-base bg-white px-2 rounded-[4px] border border-black py-1 leading-5 text-primary font-medium">
          Recent Activities
        </p>
        <div className="bg-white  mt-[5px] flex flex-wrap gap-1 rounded-[4px] ">
          <Space
            direction="vertical"
            style={{
              width: "100%",
            }}
          >
            {projectDetails?.activities?.length > 0 ? (
              projectDetails?.activities
                ?.slice(0, 1)
                .map((activity, index) => (
                  <Alert
                    key={index}
                    message={activity?.message}
                    type="info"
                    showIcon
                    className="capitalize border border-black rounded-[4px]"
                  />
                ))
            ) : (
              <Alert message="No activities here" type="info" showIcon />
            )}
          </Space>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
