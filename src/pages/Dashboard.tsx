import React from 'react';
import { Clock } from '../components/Clock';
import { WeatherWidget } from '../components/WeatherWidget';
import { PomodoroTimer } from '../components/PomodoroTimer';
import { HabitTracker } from '../components/HabitTracker';
import { GoalTracker } from '../components/GoalTracker';
import { Calculator } from '../components/Calculator';

export const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="col-span-1">
        <Clock />
        <div className="mt-6">
          <WeatherWidget />
        </div>
      </div>
      <div className="col-span-1">
        <PomodoroTimer />
        <div className="mt-6">
          <Calculator />
        </div>
      </div>
      <div className="col-span-1">
        <HabitTracker />
        <div className="mt-6">
          <GoalTracker />
        </div>
      </div>
      
    </div>
  );
};