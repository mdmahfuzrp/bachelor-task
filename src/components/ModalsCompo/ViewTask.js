import NotAvailable from "@/utils/NotAvailable";
import React from "react";

const ViewTask = ({ title, description, status }) => {
  return (
    <div className="bg-white pt-1 pb-3 px-3 rounded-md border border-black shadow-md mb-5 mt-3">
      <span className="text-[15px]">Short Title</span>
      <p
        className={`bg-special border border-black shadow-sm capitalize text-center py-1 rounded-[4px]`}
      >
        {title || <NotAvailable />}
      </p>
      <span className="text-[15px] mt-[6px] block">Task Description</span>
      <p className="bg-c_pink border border-black shadow-sm capitalize text-center py-1 rounded-[4px]">
        {description || <NotAvailable />}
      </p>

      <span className="text-[15px] mt-[6px] block">Present Status</span>
      <p
        className={`${
          status === "TODO"
            ? "bg-c_danger"
            : status === "IN_PROGRESS"
            ? "bg-c_yellow"
            : status === "DONE"
            ? "bg-c_green"
            : "bg-special"
        } border border-black shadow-sm capitalize text-center py-1 rounded-[4px]`}
      >
        {status || <NotAvailable />}
      </p>
    </div>
  );
};

export default ViewTask;
