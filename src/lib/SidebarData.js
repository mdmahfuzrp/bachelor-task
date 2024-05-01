import { LuLayoutDashboard, LuClipboardList } from "react-icons/lu";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { TbUserHexagon } from "react-icons/tb";
import { MdAutoGraph } from "react-icons/md";
import { IoFileTrayStackedOutline } from "react-icons/io5";

export const SidebarData = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: <LuLayoutDashboard />,
  },
  {
    name: "Projects",
    url: "/projects",
    icon: <IoFileTrayStackedOutline size={17} />,
  },
  {
    name: "My Tasks",
    url: "/my-tasks",
    icon: <HiOutlineClipboardDocumentList size={20} />,
  },
  {
    name: "Contributors",
    url: "/contributors",
    icon: <TbUserHexagon size={19} />,
  },
  {
    name: "Statistic",
    url: "/statistic",
    icon: <MdAutoGraph size={18} />,
  },
];
