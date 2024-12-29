import React, { useState } from 'react';
import { DollarSign, PieChart, Plus, Trash2 } from 'lucide-react';
import { useDashboardStore } from '../store';
import { formatDistanceToNow } from 'date-fns';

export const ExpenseTracker: React.FC = () => {
  const { expenses, addExpense, deleteExpense } = useDashboardStore();
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !category) return;

    addExpense({
      amount: parseFloat(amount),
      category,
      description
    });

    setAmount('');
    setCategory('');
    setDescription('');
  };

  const categories = [
    'Food', 'Transport', 'Entertainment', 'Shopping', 
    'Bills', 'Health', 'Education', 'Other'
  ];

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Expense Tracker</h2>
          <p className="text-gray-600">Total: ${totalExpenses.toFixed(2)}</p>
        </div>
        <DollarSign className="w-6 h-6 text-green-500" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            placeholder="0.00"
            step="0.01"
            min="0"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            placeholder="Optional description"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Expense
        </button>
      </form>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-gray-700">Recent Expenses</h3>
          <PieChart className="w-5 h-5 text-gray-400" />
        </div>
        
        <div className="space-y-3">
          {expenses.map((expense) => (
            <div key={expense.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">${expense.amount.toFixed(2)}</p>
                <p className="text-sm text-gray-600">{expense.category} - {expense.description}</p>
                <p className="text-xs text-gray-500">
                  {formatDistanceToNow(new Date(expense.date), { addSuffix: true })}
                </p>
              </div>
              <button 
                onClick={() => deleteExpense(expense.id)}
                className="text-gray-400 hover:text-red-500"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};