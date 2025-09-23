import React, { useState } from 'react';
type AddTaskProps = {
  onAdd: (text: string) => void;
};

const AddTask = ({ onAdd }: AddTaskProps) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== '') {
      onAdd(input);
      setInput('');
    }
  };
  return (
    <form className="container-input" onSubmit={handleSubmit}>
      <input
        className="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task..."
      />
      <button className="add-button" type="submit">
        Add
      </button>
    </form>
  );
};
export default AddTask;
