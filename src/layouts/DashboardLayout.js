import Image from "next/image";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="container !py-10">
      <div className="w-full flex items-center justify-between">
        <Image src={"/logo.png"} width={200} height={200} />
        <div>
          <button className="">Logout</button>
        </div>
      </div>
      <div className="border-2 border-black rounded-xl p-5 gap-4 grid grid-cols-8">
        <div className="col-span-2 p-5 border-black border-2 rounded-xl">
          left
        </div>
        <div className="col-span-6 p-5 border-black border-2 rounded-xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
