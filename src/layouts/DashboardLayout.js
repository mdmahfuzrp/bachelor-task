import DashboardNav from "@/components/DashboardNav";
import Sidebar from "@/shared/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-special h-full max-h-screen overflow-y-hidden">
      <div className="container !py-10">
        <DashboardNav />
        <div className="border-2 border-black rounded-xl p-5 gap-4 grid grid-cols-8">
          <div className="col-span-2 p-5 border-black border-2 rounded-xl overflow-y-auto max-h-[70vh]">
            <Sidebar />
          </div>
          <div className="col-span-6 overflow-y-auto max-h-[70vh] overflow-x-hidden p-5 border-black border-2 bg-white rounded-xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
