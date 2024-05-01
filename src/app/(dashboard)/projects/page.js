"use client";
import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import { useQuery } from "react-query";
import { PRIVATE_ENDPOINT } from "@/endpoints/Private";
import axios from "axios";
import SkeletonWithAntd from "@/utils/SkeletonWithAntd";
import SingleProject from "@/components/SingleProject";
import NoDataFound from "@/utils/NoDataFound";
import Link from "next/link";

const helper = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${PRIVATE_ENDPOINT.projects.get_all_projects}`
  );
};

const Projects = () => {
  const {
    isLoading,
    isError,
    data: projectList,
    error,
    refetch,
  } = useQuery("all-projects", helper);
  console.log(projectList);
  return (
    <DashboardLayout>
      {isLoading ? (
        <SkeletonWithAntd rows={6} />
      ) : isError ? (
        "Something wen't wrong"
      ) : projectList?.data?.length > 0 ? (
        <div>
          <h1 className="text-[18px] flex items-center justify-between uppercase py-[2px] bg-special border-2 border-black px-2 rounded-md mb-3 font-medium  text-primary">
            All projects
            <Link
              href="/projects/add-project"
              className="text-[12px] font-medium hover:bg-green-300 duration-150 bg-c_green py-[2px] px-[0px] w-full max-w-[120px] mb-[1px] rounded-full shadow-md border-black border text-center"
            >
              Add a project
            </Link>
          </h1>

          <div className="grid grid-cols-3 gap-4">
            {projectList?.data?.map((project) => (
              <SingleProject
                refetch={refetch}
                project={project}
                key={project?.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <NoDataFound />
      )}
    </DashboardLayout>
  );
};

export default Projects;
