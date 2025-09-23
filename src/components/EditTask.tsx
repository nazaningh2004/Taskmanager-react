import React, { useState } from 'react';
import Button from './Button';

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
      <Button type="submit">Save</Button>
      <Button type="button" onClick={onCancel}>
        Cancel
      </Button>
    </form>
  );
};

export default EditTask;
