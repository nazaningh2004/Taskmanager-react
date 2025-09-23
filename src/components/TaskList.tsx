import EditTask from './EditTask';
import type { Task } from '../Task';
import TaskItemView from './TaskItem';

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  editingTaskId: number | null;
  onSaveEdit: (id: number, newText: string) => void;
  onCancelEdit: () => void;
};

const TaskList = ({
  tasks,
  onToggle,
  onDelete,
  onEdit,
  editingTaskId,
  onSaveEdit,
  onCancelEdit,
}: TaskListProps) => {
  return (
    <ul className="style">
      {tasks.length === 0 ? (
        <p className="no-tasks-message">No tasks here!</p>
      ) : (
        <>
          {tasks.map((task) => (
            <li key={task.id}>
              {editingTaskId === task.id ? (
                <EditTask
                  initialText={task.text}
                  onSave={(newText: string) => onSaveEdit(task.id, newText)}
                  onCancel={onCancelEdit}
                />
              ) : (
                <TaskItemView
                  task={task}
                  onToggle={onToggle}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              )}
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export default TaskList;
