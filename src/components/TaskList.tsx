import EditTask from './EditTask';
type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  editingTaskId: number | null;
  onSaveEdit: (id: number, newText: string) => void;
};

const TaskList = ({
  tasks,
  onToggle,
  onDelete,
  onEdit,
  editingTaskId,
  onSaveEdit,
}: TaskListProps) => {
  return (
    <ul className="style">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'checked' : ''}>
          {editingTaskId === task.id ? (
            <EditTask
              initialText={task.text}
              onSave={(newText: string) => onSaveEdit(task.id, newText)}
              onCancel={() => onEdit(-1)}
            />
          ) : (
            <>
              <button
                className="checklist-btn"
                onClick={() => onToggle(task.id)}
              ></button>
              <span>{task.text}</span>
              <button onClick={() => onEdit(task.id)}>✏️</button>
              <button onClick={() => onDelete(task.id)}>❌</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
