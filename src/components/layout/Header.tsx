import React from 'react';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-gray-900">AI Dashboard</h1>
            <Navigation />
          </div>
          <UserMenu />
        </div>
      </div>
    </header>
  );
};