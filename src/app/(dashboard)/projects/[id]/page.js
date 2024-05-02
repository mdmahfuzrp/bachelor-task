"use client";
import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { useQuery } from "react-query";
import { PRIVATE_ENDPOINT } from "@/endpoints/Private";
import SkeletonWithAntd from "@/utils/SkeletonWithAntd";
import NoDataFound from "@/utils/NoDataFound";
import ProjectDetails from "@/components/ProjectDetails";
import AllTasks from "@/components/Tasks/AllTasks";

const ProjectDetailsPage = () => {
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
          <ProjectDetails projectDetails={projectDetails?.data} />
          <AllTasks />
        </div>
      ) : (
        <NoDataFound />
      )}
    </DashboardLayout>
  );
};

export default ProjectDetailsPage;
