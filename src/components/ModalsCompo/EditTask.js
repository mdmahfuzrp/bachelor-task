import { TodoOption } from "@/lib/TodoOption";
import { Select } from "antd";

const EditTask = ({ setEditedTask, editedTask }) => {
  const handleSetStatus = (value) => {
    setEditedTask({
      ...editedTask,
      status: value,
    });
  };

  return (
    <form className="bg-special pt-3 pb-5 px-5 rounded-md border border-black">
      <div className="flex flex-col">
        <label htmlFor="" className="font-medium text-[14px] text-primary">
          Title
        </label>
        <input
          type="text"
          placeholder="Title"
          value={editedTask?.title}
          onChange={(e) =>
            setEditedTask({
              ...editedTask,
              title: e?.target?.value,
            })
          }
          className=" text-primary outline-none mt-1 bg-white  py-[6px] px-3 rounded-[4px] border border-black"
        />
      </div>

      <div className="flex flex-col mt-4">
        <label htmlFor="" className="font-medium text-[14px] text-primary">
          Description
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={editedTask?.description}
          onChange={(e) =>
            setEditedTask({
              ...editedTask,
              description: e?.target?.value,
            })
          }
          placeholder="Description"
          className="bg-white outline-none text-primary min-h-[37px] max-h-[90px] mt-1  py-[6px] px-3 rounded-[4px] border border-black"
        ></textarea>
      </div>

      <div className="flex flex-col  col-span-full">
        <label htmlFor="Title" className="font-medium text-[14px] text-primary">
          Assign Team Member<span className="text-c_danger">*</span>
        </label>
        <div className="border border-black  mt-[2px] rounded-md">
          <Select
            allowClear
            style={{
              width: "100%",
            }}
            placeholder="Please select"
            onChange={handleSetStatus}
            options={TodoOption}
          />
        </div>
      </div>
    </form>
  );
};

export default EditTask;
