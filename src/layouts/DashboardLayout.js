import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="border-2 rounded-xl p-5 gap-4 grid-cols-7">
        <div className="col-span-2 border-2 rounded-xl">left</div>
        <div className="col-span-5 border-2 rounded-xl">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
