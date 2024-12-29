import React from 'react';
import { MapPin, Building2, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useUserStore } from '../../store/userStore';

export const ProfileCard: React.FC = () => {
  const { profile } = useUserStore();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-start gap-6">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
          <p className="text-lg text-gray-600">{profile.title}</p>
          <p className="mt-2 text-gray-600">{profile.bio}</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-5 h-5" />
          <span>{profile.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Building2 className="w-5 h-5" />
          <span>{profile.company}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Mail className="w-5 h-5" />
          <span>{profile.email}</span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-gray-900 mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        {profile.socialLinks.github && (
          <a
            href={profile.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
        {profile.socialLinks.linkedin && (
          <a
            href={profile.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {profile.socialLinks.twitter && (
          <a
            href={profile.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Twitter className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
};