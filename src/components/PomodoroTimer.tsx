import React, { useState, useEffect } from 'react';
import { Timer, Play, Pause, RefreshCw } from 'lucide-react';

export const PomodoroTimer: React.FC = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<'work' | 'break'>('work');

  useEffect(() => {
    let interval: number;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsActive(false);
            setMode(mode === 'work' ? 'break' : 'work');
            setMinutes(mode === 'work' ? 5 : 25);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, mode]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setMode('work');
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Pomodoro Timer</h2>
        <Timer className="w-6 h-6 text-red-500" />
      </div>
      
      <div className="text-center">
        <div className="text-5xl font-bold text-gray-900 mb-6">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={toggleTimer}
            className="p-2 rounded-full bg-red-100 hover:bg-red-200"
          >
            {isActive ? (
              <Pause className="w-6 h-6 text-red-600" />
            ) : (
              <Play className="w-6 h-6 text-red-600" />
            )}
          </button>
          <button
            onClick={resetTimer}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <RefreshCw className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <p className="text-sm text-gray-600">
          {mode === 'work' ? 'Work Time' : 'Break Time'}
        </p>
      </div>
    </div>
  );
};