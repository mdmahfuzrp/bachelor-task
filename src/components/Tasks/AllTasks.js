import React from "react";
import Columns from "./Columns";

const AllTasks = () => {
  return (
    <section className="flex text-primary bg-special border-2 border-black rounded-md px-4 mt-5">
      <div className="w-full">
        <Columns />
      </div>
    </section>
  );
};

export default AllTasks;
