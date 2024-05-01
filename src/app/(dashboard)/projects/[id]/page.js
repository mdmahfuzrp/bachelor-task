import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import { Alert, Space } from "antd";

const ProjectDetails = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-[18px] py-[2px] bg-special border-2 border-black px-2 rounded-md mb-3 font-medium  text-primary">
          Team Projects
        </h1>

        <div className="grid grid-cols-3 gap-4 border-2 pt-3 border-black py-2 pb-3 px-[14px] rounded-md">
          <div className="">
            <p className="text-base bg-special px-2 rounded-[4px] border border-black py-1 leading-5 text-primary font-medium">
              Here is my title
            </p>
            <span className="text-[13px] bg-special py-1 px-2 border border-black rounded-[4px] leading-4 mt-[5px] block text-primary opacity-80 font-normal">
              Here is my description and it's really amazing to see this
            </span>
          </div>
          <div>
            <p className="text-base bg-special px-2 rounded-[4px] border border-black py-1 leading-5 text-primary font-medium">
              Team Members
            </p>
            <div className="bg-special px-2 mt-[5px] py-2 pt-[6px] pb-[7px] flex flex-wrap gap-1 rounded-[4px] border border-black">
              <span className="bg-white py-[3px] px-2 rounded-[3px] border border-black block w-fit text-[12px]">
                Uttam
              </span>
              <span className="bg-white py-[3px] px-2 rounded-[3px] border border-black block w-fit text-[12px]">
                Mahfuz
              </span>
              <span className="bg-white py-[3px] px-2 rounded-[3px] border border-black block w-fit text-[12px]">
                Susanto
              </span>
              <span className="bg-white py-[3px] px-2 rounded-[3px] border border-black block w-fit text-[12px]">
                Tushar
              </span>
              <span className="bg-white py-[3px] px-2 rounded-[3px] border border-black block w-fit text-[12px]">
                Pm
              </span>
              <span className="bg-white py-[3px] px-2 rounded-[3px] border border-black block w-fit text-[12px]">
                Mohin sir
              </span>
            </div>
          </div>

          <div>
            <p className="text-base bg-special px-2 rounded-[4px] border border-black py-1 leading-5 text-primary font-medium">
              Recent Activities
            </p>
            <div className="bg-white px-2 mt-[5px] py-2 pt-[6px] pb-[7px] flex flex-wrap gap-1 rounded-[4px] border border-black">
              <Space
                direction="vertical"
                style={{
                  width: "100%",
                }}
              >
                <Alert message="Informational Notes" type="warning" showIcon />
              </Space>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectDetails;
