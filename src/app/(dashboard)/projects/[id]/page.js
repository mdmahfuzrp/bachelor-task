"use client";
import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import { Alert, Space } from "antd";
import { useParams } from "next/navigation";
import axios from "axios";
import { useQuery } from "react-query";
import { PRIVATE_ENDPOINT } from "@/endpoints/Private";
import SkeletonWithAntd from "@/utils/SkeletonWithAntd";
import NoDataFound from "@/utils/NoDataFound";

const ProjectDetails = () => {
  const { id } = useParams();

  const helper = () => {
    return axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${PRIVATE_ENDPOINT.projects.get_all_projects}/${id}`
    );
  };

  // details fetch here
  const {
    isLoading,
    isError,
    data: projectDetails,
    error,
    refetch,
  } = useQuery("project-details", helper);

  return (
    <DashboardLayout>
      {isLoading ? (
        <SkeletonWithAntd rows={6} />
      ) : isError ? (
        "Something wen't wrong"
      ) : projectDetails?.data ? (
        <div>
          <h1 className="text-[18px] uppercase py-[2px] bg-special border-2 border-black px-2 rounded-md mb-3 font-medium  text-primary">
            Project Details
          </h1>

          <div className="grid grid-cols-3 gap-4 border-2 pt-3 border-black py-2 pb-3 px-[14px] rounded-md">
            <div className="">
              <p className="text-base bg-special px-2 rounded-[4px] border border-black py-1 leading-5 text-primary font-medium">
                {projectDetails?.data?.title ? (
                  `${projectDetails?.data?.title?.slice(0, 28)}${
                    projectDetails?.data?.title?.length > 28 ? "..." : ""
                  }`
                ) : (
                  <NotAvailable />
                )}
              </p>
              <span className="text-[13px] bg-special py-1 px-2 border border-black rounded-[4px] leading-4 mt-[5px] block text-primary opacity-80 font-normal">
                {projectDetails?.data?.description ? (
                  `${projectDetails?.data?.description?.slice(0, 105)}${
                    projectDetails?.data?.description?.length > 105 ? "..." : ""
                  }`
                ) : (
                  <NotAvailable />
                )}
              </span>
            </div>
            <div>
              <p className="text-base bg-special px-2 rounded-[4px] border border-black py-1 leading-5 text-primary font-medium">
                Team Members
              </p>
              <div className="bg-special px-2 mt-[5px] py-2 pt-[6px] pb-[7px] flex flex-wrap gap-1 rounded-[4px] border border-black">
                {projectDetails?.data?.teams?.length > 0 ? (
                  projectDetails?.data?.teams?.map((member) => (
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
                  {projectDetails?.data?.activities?.length > 0 ? (
                    projectDetails?.data?.activities
                      ?.slice(0, 2)
                      .map((activity, index) => (
                        <Alert
                          key={index}
                          message={activity?.message}
                          type="warning"
                          showIcon
                        />
                      ))
                  ) : (
                    <Alert message="No activities here" type="info" showIcon />
                  )}
                </Space>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NoDataFound />
      )}
    </DashboardLayout>
  );
};

export default ProjectDetails;
