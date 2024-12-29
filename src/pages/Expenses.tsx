import React from 'react';
import { ExpenseTracker } from '../components/ExpenseTracker';

export const Expenses: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <ExpenseTracker />
    </div>
  );
};