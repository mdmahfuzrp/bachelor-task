"use client";
import { Button, Dropdown, Space, Avatar, Badge } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import DrawerForNav from "./DrawerForNav";
import Link from "next/link";
import { deleteCookie } from "@/utils/cookies";
import { useRouter } from "next/navigation";

const DashboardNav = () => {
  const router = useRouter();
  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          Profile
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          Settings & privacy
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <button type="button" onClick={() => deleteCookie(router)}>
          Logout
        </button>
      ),
    },
  ];
  return (
    <div className="bg-white rounded-xl">
      <div className="w-full flex items-center justify-between border-2 px-5 pl-3 rounded-xl mb-3 border-black">
        <Link href={"/dashboard"}>
          <Image
            src={"/logo.png"}
            className="w-[150px] lg:w-[200px]"
            width={200}
            height={200}
          />
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          <button className="border rounded-full p-[2px]">
            <Badge count={100}>
              <Avatar icon={<UserOutlined />} />
            </Badge>
          </button>

          <Space wrap>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomRight"
              arrow={{
                pointAtCenter: true,
              }}
            >
              <div className="p-[2px] border rounded-md">
                <Image
                  src="/images/auth/about7.jpg"
                  className="w-[35px] cursor-pointer shadow-sm h-[35px] object-cover rounded-sm border"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </Dropdown>
          </Space>
        </div>
        <DrawerForNav />
      </div>
    </div>
  );
};

export default DashboardNav;
