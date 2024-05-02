import AddNewTask from "./AddNewTask";
import Column from "./Column";

export default function Columns() {
  return (
    <div>
      <AddNewTask />

      <section className="flex gap-4">
        <Column title="Todo" status="TODO" />
        <Column title="In Progress" status="IN_PROGRESS" />
        <Column title="Done" status="DONE" />
      </section>
    </div>
  );
}
