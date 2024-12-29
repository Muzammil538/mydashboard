import { create } from 'zustand';
import { storage } from '../utils/storage';
import { UserProfile } from '../types/user';

interface UserState {
  profile: UserProfile;
  updateProfile: (profile: Partial<UserProfile>) => void;
}

const defaultProfile: UserProfile = {
  id: '1',
  name: 'M A Muzammil',
  title: 'Software Engineer | Student | Freelancer',
  email: 'muzammilmohd538@gmail.com',
  avatar: 'src/avatar.jpg',
  bio: 'Passionate software engineer with expertise in web development and AI.',
  location: 'Hanamkonda, Telangana, India',
  company: 'NO',
  skills: ['React', 'TypeScript', 'Node.js', 'AI/ML'],
  socialLinks: {
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
    twitter: 'https://twitter.com/johndoe'
  }
};

export const useUserStore = create<UserState>((set) => ({
  profile: storage.get<UserProfile>('userProfile', defaultProfile),
  updateProfile: (updates) => 
    set((state) => {
      const newProfile = { ...state.profile, ...updates };
      storage.set('userProfile', newProfile);
      return { profile: newProfile };
    })
}));