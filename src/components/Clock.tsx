import React, { useState, useEffect } from 'react';
import { Clock as ClockIcon } from 'lucide-react';
import { format } from 'date-fns';

export const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Clock</h2>
        <ClockIcon className="w-6 h-6 text-blue-500" />
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold text-gray-900">
          {format(time, 'HH:mm:ss')}
        </p>
        <p className="text-lg text-gray-600 mt-2">
          {format(time, 'EEEE, MMMM do, yyyy')}
        </p>
      </div>
    </div>
  );
};