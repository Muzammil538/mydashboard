import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind } from 'lucide-react';

const mockWeatherData = {
  temp: 22,
  condition: 'sunny',
  humidity: 65,
  windSpeed: 12
};

export const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState(mockWeatherData);

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case 'sunny':
        return <Sun className="w-12 h-12 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="w-12 h-12 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="w-12 h-12 text-blue-500" />;
      default:
        return <Sun className="w-12 h-12 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Weather</h2>
        {getWeatherIcon()}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold text-gray-900">
            {weather.temp}°C
          </span>
          <span className="text-gray-500 capitalize">{weather.condition}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="flex items-center gap-2">
            <Cloud className="w-5 h-5 text-blue-500" />
            <span className="text-gray-600">{weather.humidity}% Humidity</span>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-5 h-5 text-blue-500" />
            <span className="text-gray-600">{weather.windSpeed} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};