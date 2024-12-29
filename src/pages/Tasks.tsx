import React from 'react';
import { TaskList } from '../components/TaskList';

export const Tasks: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <TaskList />
    </div>
  );
};