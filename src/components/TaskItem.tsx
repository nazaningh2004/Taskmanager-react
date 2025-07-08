type TaskitemProps = {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
};

const TaskItem = ({ task, onToggle, onDelete, onEdit }: TaskitemProps) => {
  return (
    <li className={task.completed ? 'checked' : ''}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => onEdit(task.id)}>✏️</button>
      <button onClick={() => onDelete(task.id)}>❌</button>
    </li>
  );
};

export default TaskItem;
