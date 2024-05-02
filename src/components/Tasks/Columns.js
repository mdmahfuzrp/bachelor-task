import AddNewTask from "./AddNewTask";
import Column from "./Column";

export default function Columns() {
  return (
    <div>
      <AddNewTask />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Column title="Todo" status="TODO" />
        <Column title="In Progress" status="IN_PROGRESS" />
        <Column title="Done" status="DONE" />
      </section>
    </div>
  );
}
