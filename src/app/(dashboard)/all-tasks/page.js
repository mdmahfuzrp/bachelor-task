import AllTasks from "@/components/Tasks/AllTasks";
import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

const MyAllTasks = () => {
  return (
    <DashboardLayout>
      <h1 className="text-[18px] uppercase py-[2px] bg-special border-2 border-black px-2 rounded-md mb-3 font-medium  text-primary">
        My All Tasks
      </h1>
      <AllTasks />
    </DashboardLayout>
  );
};

export default MyAllTasks;
