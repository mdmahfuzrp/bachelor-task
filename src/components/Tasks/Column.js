"use client";

import useTaskStore from "@/zustand/store";
import { useEffect, useMemo } from "react";
import Task from "./Task";

export default function Column({ title, status }) {
  const tasks = useTaskStore((state) => state.tasks);
  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.status === status),
    [tasks, status]
  );

  const updateTask = useTaskStore((state) => state.updateTask);
  const dragTask = useTaskStore((state) => state.dragTask);

  const draggedTask = useTaskStore((state) => state.draggedTask);

  const handleDrop = (e) => {
    if (!draggedTask) return;
    updateTask(draggedTask, status);
    dragTask(null);
  };

  useEffect(() => {
    useTaskStore.persist.rehydrate();
  }, []);

  return (
    <section className="max-h-[70vh] h-full bg-white rounded-md flex-1 mt-[14px]">
      <h2
        className={`${
          title === "Todo"
            ? "bg-c_danger"
            : title === "In Progress"
            ? "bg-c_yellow"
            : title === "Done"
            ? "bg-c_green"
            : "bg-special"
        } border-2 py-1 text-center font-medium border-black text-[14px] rounded-t-md`}
      >
        {title}
      </h2>

      <div
        className={`h-full overflow-y-auto pt-3 max-h-[400px] min-h-[400px] w-full rounded-b-md border-2 border-black border-t-0 px-3 `}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-[6px]">
          {filteredTasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
          {filteredTasks.length === 0 && status === "TODO" && (
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Create a new task</p>
            </div>
          )}

          {tasks.length && filteredTasks.length === 0 && status !== "TODO" ? (
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Drag your tasks here</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
