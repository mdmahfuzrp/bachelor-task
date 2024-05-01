import { Empty } from "antd";
import Link from "next/link";
import React from "react";

const NoDataFound = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 100,
        }}
        description={<span className="opacity-50">No data found</span>}
      >
        <Link
          href={"/projects/add-project"}
          className="bg-special hover:text-primary hover:bg-c_green duration-150 font-medium py-[6px] px-[10px] rounded-[5px] border border-black text-[15px]"
        >
          Create project
        </Link>
      </Empty>
    </div>
  );
};

export default NoDataFound;
