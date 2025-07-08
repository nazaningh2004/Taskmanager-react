import React, { useState } from 'react';
type EditTaskProps = {
  initialText: string;
  onSave: (newText: string) => void;
  onCancel: () => void;
};

const EditTask = ({ initialText, onSave, onCancel }: EditTaskProps) => {
  const [newText, setNewText] = useState(initialText);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newText.trim() !== '') {
      onSave(newText.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        autoFocus
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditTask;
