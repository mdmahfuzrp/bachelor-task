import React from "react";

const AddTask = ({ title, description, setTitle, setDescription }) => {
  return (
    <form className="bg-special pt-3 pb-5 px-5 rounded-md border border-black">
      <div className="flex flex-col">
        <label htmlFor="" className="text-[16px] text-primary">
          Title
        </label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e?.target?.value)}
          className=" text-primary outline-none mt-1 bg-white  py-[6px] px-3 rounded-[4px] border border-black"
        />
      </div>

      <div className="flex flex-col mt-4">
        <label htmlFor="" className="text-[16px] text-primary">
          Description
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={description}
          onChange={(e) => setDescription(e?.target?.value)}
          placeholder="Description"
          className="bg-white outline-none text-primary min-h-[37px] max-h-[90px] mt-1  py-[6px] px-3 rounded-[4px] border border-black"
        ></textarea>
      </div>
    </form>
  );
};

export default AddTask;
