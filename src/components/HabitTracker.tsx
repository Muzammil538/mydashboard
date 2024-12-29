import React from 'react';
import { Activity, Check, Plus } from 'lucide-react';
import { useDashboardStore } from '../store';

export const HabitTracker: React.FC = () => {
  const { habits, addHabit } = useDashboardStore();
  
  const handleAddHabit = () => {
    addHabit({
      name: 'New Habit',
      frequency: 'daily',
      progress: 0,
      target: 1,
      streak: 0
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Habits</h2>
        <Activity className="w-6 h-6 text-purple-500" />
      </div>

      <div className="space-y-4">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className="p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-700">{habit.name}</span>
              <span className="text-sm text-gray-500">
                {habit.progress}/{habit.target} {habit.frequency}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-500 rounded-full h-2"
                  style={{
                    width: `${(habit.progress / habit.target) * 100}%`
                  }}
                />
              </div>
              <span className="text-sm text-purple-600">
                {habit.streak} streak
              </span>
            </div>
          </div>
        ))}

        <button
          onClick={handleAddHabit}
          className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-purple-500 hover:text-purple-500 flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Habit
        </button>
      </div>
    </div>
  );
};