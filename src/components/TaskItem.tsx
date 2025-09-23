import type { Task } from '../Task';
import Button from './Button';

type TaskitemProps = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
};

const TaskItemView = ({ task, onToggle, onDelete, onEdit }: TaskitemProps) => {
  return (
    <li className={task.completed ? 'checked' : ''}>
      <button className="checklist-btn" onClick={() => onToggle(task.id)}>
        &nbsp;
      </button>
      <span className={task.completed ? 'checked' : ''}>{task.text}</span>
      
        <Button onClick={() => onEdit(task.id)}>✏️</Button>
        <Button onClick={() => onDelete(task.id)}>❌</Button>
      
    </li>
  );
};

export default TaskItemView;
