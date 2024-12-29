export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  category?: string;
  tags: string[];
  createdAt: Date;
}

export interface Note {
  id: string;
  content: string;
  createdAt: Date;
  category?: string;
  tags: string[];
}

export interface Reminder {
  id: string;
  title: string;
  datetime: Date;
  recurring?: boolean;
  frequency?: 'daily' | 'weekly' | 'monthly';
}

export interface Habit {
  id: string;
  name: string;
  frequency: 'daily' | 'weekly' | 'monthly';
  progress: number;
  target: number;
  streak: number;
}

export interface Goal {
  id: string;
  title: string;
  description?: string;
  progress: number;
  target: number;
  deadline?: Date;
  milestones: {
    id: string;
    title: string;
    completed: boolean;
  }[];
}

export interface Expense {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
}