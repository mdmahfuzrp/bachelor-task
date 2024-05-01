import { Button, Dropdown, Space, Avatar, Badge } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Profile
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Settings & privacy
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        New updates
      </a>
    ),
  },
];

const DashboardNav = () => {
  return (
    <div className="bg-white rounded-xl">
      <div className="w-full flex items-center justify-between border-2 px-5 pl-3 rounded-xl mb-3 border-black">
        <Image src={"/logo.png"} width={200} height={200} />
        <div className="flex items-center gap-6">
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
      </div>
    </div>
  );
};

export default DashboardNav;
