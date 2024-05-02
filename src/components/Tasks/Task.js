import MyModal from "@/utils/MyModal";
import { cn } from "@/utils/cn";
import useTaskStore from "@/zustand/store";
import { useState } from "react";
import { GrView } from "react-icons/gr";
import ViewTask from "../ModalsCompo/ViewTask";
import { SmileOutlined } from "@ant-design/icons";
import { Dropdown, message } from "antd";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import EditTask from "../ModalsCompo/EditTask";

const items = [
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

export default function Task({ id, title, description, status }) {
  // show error message
  const [messageApi, contextHolder] = message.useMessage();

  const dragTask = useTaskStore((state) => state.dragTask);
  const removeTask = useTaskStore((state) => state.removeTask);

  // local states
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [clickedKey, setClickedKey] = useState("");
  const [editedTask, setEditedTask] = useState({
    title: title || "",
    description: description || "",
    status: status || "",
  });

  // update action get from store
  const updateTask = useTaskStore((state) => state.updateTask);
  console.log(updateTask);

  const handleOk = () => {
    console.log(clickedKey);
    if (clickedKey === "2") {
      setLoading(true);

      if (!title || !description || !status) {
        setLoading(false);
        messageApi.error("Please fill the required field.");
        return;
      }

      setTimeout(() => {
        setLoading(false);
        setOpen(false);
        updateTask(id, editedTask?.status);
        messageApi.success("Successfully task updated.");
      }, 1000);
    } else {
      setOpen(false);
    }
  };
  const handleMenuClick = (e) => {
    setOpen(true);
    setClickedKey(e?.key);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      {contextHolder}
      <div
        className={cn(
          "flex cursor-move items-start justify-between rounded-[4px] px-3 py-2 ",
          {
            "border border-black bg-c_danger": status === "TODO",
            "border border-black bg-c_yellow": status === "IN_PROGRESS",
            "border border-black bg-c_green": status === "DONE",
          }
        )}
        onDragStart={() => dragTask(id)}
        draggable
      >
        <div>
          <h3 className="font-medium text-black">{title}</h3>
          <p className="text-sm font-light text-black">{description}</p>
        </div>

        <div className="w-[22px] flex items-center justify-center flex-col gap-[6px]">
          <Dropdown menu={menuProps}>
            <div className="cursor-pointer bg-white w-[22px] h-[22px] flex items-center justify-center rounded-[4px]">
              <PiDotsThreeOutlineFill />
            </div>
          </Dropdown>

          <button
            className="cursor-pointer bg-white w-[22px] h-[22px] flex items-center justify-center rounded-[4px]"
            onClick={() => removeTask(id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill=""
              className="h-4 w-4 opacity-80 fill-c_danger hover:text-rose-400"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <MyModal
          content={
            clickedKey === "2" ? (
              <EditTask setEditedTask={setEditedTask} editedTask={editedTask} />
            ) : clickedKey === "1" ? (
              <ViewTask
                title={title}
                description={description}
                status={status}
              />
            ) : (
              "hello world"
            )
          }
          handleOk={handleOk}
          loading={loading}
          setOpen={setOpen}
          open={open}
          title={
            clickedKey === "1"
              ? "Task details"
              : clickedKey === "2"
              ? "Edit task"
              : ""
          }
          footer={
            clickedKey === "1" &&
            ((_, { OkBtn, CancelBtn }) => (
              <>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="bg-special px-[10px] py-[3px] border border-black rounded-[4px]"
                >
                  Close
                </button>
              </>
            ))
          }
        />
      </div>
    </>
  );
}
