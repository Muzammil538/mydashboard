import React, { useState } from 'react';
import { User } from 'lucide-react';
import { useUserStore } from '../../store/userStore';
import { ProfileCard } from '../profile/ProfileCard';

export const UserMenu: React.FC = () => {
  const [showProfile, setShowProfile] = useState(false);
  const { profile } = useUserStore();

  return (
    <div className="relative">
      <button
        onClick={() => setShowProfile(!showProfile)}
        className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
      >
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span>{profile.name}</span>
      </button>

      {showProfile && (
        <div className="absolute right-0 top-full mt-2 w-screen max-w-lg">
          <ProfileCard />
        </div>
      )}
    </div>
  );
};