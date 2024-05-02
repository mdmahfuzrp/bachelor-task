"use client";
import Sidebar from "@/shared/Sidebar";
import React, { useState } from "react";
import { Drawer } from "antd";
import { IoMenu } from "react-icons/io5";

const DrawerForNav = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <div className="flex lg:hidden">
      <button onClick={showDrawer}>
        <IoMenu size={22} />
      </button>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <Sidebar />
      </Drawer>
    </div>
  );
};

export default DrawerForNav;
