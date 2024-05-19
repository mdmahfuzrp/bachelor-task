import { LuLayoutDashboard, LuClipboardList } from "react-icons/lu";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { TbUserHexagon } from "react-icons/tb";
import { MdAutoGraph } from "react-icons/md";
import { IoFileTrayStackedOutline } from "react-icons/io5";

export const SidebarData = [
  {
    name: "Dashboard",
    url: "/users/dashboard",
    icon: <LuLayoutDashboard />,
  },
  {
    name: "Projects",
    url: "/users/projects",
    icon: <IoFileTrayStackedOutline size={17} />,
  },
  {
    name: "Manage Tasks",
    url: "/users/manage-tasks",
    icon: <HiOutlineClipboardDocumentList size={20} />,
  },
  {
    name: "All Tasks",
    url: "/users/all-tasks",
    icon: <TbUserHexagon size={19} />,
  },
  {
    name: "Statistic",
    url: "/users/statistic",
    icon: <MdAutoGraph size={18} />,
  },
];
