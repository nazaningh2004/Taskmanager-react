import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import FilterTask from './components/FilterTask';

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [taskList, setTasks] = useState<Task[]>([]);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredTasks = taskList.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...taskList, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  //filter:new array
  const deleteTask = (id: number) => {
    setTasks(taskList.filter((task) => task.id !== id));
  };
  const updateTask = (id: number, newText: string) => {
    setTasks(
      taskList.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
    setEditingTaskId(null);
  };
  return (
    <div className="container">
      <div className="box">
        <p className="text">Todo List</p>
        <AddTask onAdd={addTask} />
        <FilterTask filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={(id) => setEditingTaskId(id)}
          editingTaskId={editingTaskId}
          onSaveEdit={updateTask}
        />
      </div>
    </div>
  );
}
export default App;
