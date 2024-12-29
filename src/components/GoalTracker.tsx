import React from 'react';
import { Target, Plus } from 'lucide-react';
import { useDashboardStore } from '../store';

export const GoalTracker: React.FC = () => {
  const { goals, addGoal } = useDashboardStore();

  const handleAddGoal = () => {
    addGoal({
      title: 'New Goal',
      progress: 0,
      target: 100,
      milestones: []
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Goals</h2>
        <Target className="w-6 h-6 text-green-500" />
      </div>

      <div className="space-y-4">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-700">{goal.title}</span>
              <span className="text-sm text-gray-500">
                {goal.progress}%
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="bg-green-500 rounded-full h-2"
                style={{ width: `${goal.progress}%` }}
              />
            </div>

            {goal.milestones.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-600">Milestones</h4>
                {goal.milestones.map((milestone) => (
                  <div
                    key={milestone.id}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={milestone.completed}
                      className="rounded text-green-500"
                      readOnly
                    />
                    <span className={milestone.completed ? 'line-through text-gray-400' : 'text-gray-600'}>
                      {milestone.title}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <button
          onClick={handleAddGoal}
          className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-green-500 hover:text-green-500 flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Goal
        </button>
      </div>
    </div>
  );
};