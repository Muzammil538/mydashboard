export interface UserProfile {
  id: string;
  name: string;
  title: string;
  email: string;
  avatar: string;
  bio: string;
  location: string;
  company: string;
  skills: string[];
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}