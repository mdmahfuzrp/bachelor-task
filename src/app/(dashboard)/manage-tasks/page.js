"use client";
import Task from "@/components/Tasks/Task";
import DashboardLayout from "@/layouts/DashboardLayout";
import { TodoOption } from "@/lib/TodoOption";
import { Input, Select } from "antd";
import useTaskStore from "@/zustand/store";
import { useEffect, useMemo, useState } from "react";

const ManageTasks = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const [allTasks, setAllTasks] = useState(tasks || []);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  // search functionality
  const handleSearch = (e) => {
    setSearch(e?.target?.value);
  };

  // filter using status
  const handleSetStatus = (value) => {
    setStatus(value);
  };

  // get data from local using persist
  useEffect(() => {
    useTaskStore.persist.rehydrate();
  }, []);

  //   update state with on load
  useEffect(() => {
    if (search) {
      const newData = tasks?.filter((task) =>
        task?.title?.toLowerCase().includes(search.toLowerCase())
      );
      setAllTasks(newData);
    } else if (status) {
      const newData = tasks?.filter((task) => task?.status === status);
      setAllTasks(newData);
    } else {
      setAllTasks(tasks);
    }
  }, [tasks, search, status]);

  return (
    <DashboardLayout>
      <div className="text-[18px] flex flex-col sm:flex-row items-center justify-between pb-[2px] uppercase py-[2px] bg-special border-2 border-black px-2 rounded-md mb-3 font-medium  text-primary">
        Manage Tasks
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <Input
            placeholder="Search title here..."
            allowClear
            onChange={handleSearch}
            className="border w-full border-black text-primary"
          />

          <div className="border w-full border-black capitalize mt-[2px] rounded-md">
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
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-start">
        {allTasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default ManageTasks;
