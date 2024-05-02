import { GrView } from "react-icons/gr";

export const TodoMenuOption = [
  {
    key: "1",
    label: (
      <div className="cursor-pointer  gap-1 w-full h-[22px] flex items-center justify-center rounded-[4px]">
        <span className="opacity-70">
          <GrView size={14} />
        </span>
        View details
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className="cursor-pointer  gap-1 w-full h-[22px] flex items-center justify-center rounded-[4px]">
        <span className="opacity-70">
          <GrView size={14} />
        </span>
        Edit task
      </div>
    ),
  },
];
