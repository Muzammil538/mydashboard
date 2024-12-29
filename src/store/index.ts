import { create } from 'zustand';
import { storage } from '../utils/storage';
import { Task, Note, Reminder, Habit, Goal, Expense } from '../types';

interface DashboardState {
  tasks: Task[];
  notes: Note[];
  reminders: Reminder[];
  habits: Habit[];
  goals: Goal[];
  expenses: Expense[];
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  addNote: (note: Omit<Note, 'id' | 'createdAt'>) => void;
  addReminder: (reminder: Omit<Reminder, 'id'>) => void;
  addHabit: (habit: Omit<Habit, 'id'>) => void;
  addGoal: (goal: Omit<Goal, 'id'>) => void;
  addExpense: (expense: Omit<Expense, 'id' | 'date'>) => void;
  toggleTaskComplete: (id: string) => void;
  updateTask: (id: string, task: Partial<Task>) => void;
  updateNote: (id: string, note: Partial<Note>) => void;
  deleteTask: (id: string) => void;
  deleteNote: (id: string) => void;
  deleteExpense: (id: string) => void;
}

// Load initial state from localStorage
const initialState = {
  tasks: storage.get<Task[]>('tasks', []),
  notes: storage.get<Note[]>('notes', []),
  reminders: storage.get<Reminder[]>('reminders', []),
  habits: storage.get<Habit[]>('habits', []),
  goals: storage.get<Goal[]>('goals', []),
  expenses: storage.get<Expense[]>('expenses', [])
};

export const useDashboardStore = create<DashboardState>((set) => ({
  ...initialState,

  addTask: (task) =>
    set((state) => {
      const newTasks = [
        ...state.tasks,
        { ...task, id: crypto.randomUUID(), createdAt: new Date() }
      ];
      storage.set('tasks', newTasks);
      return { tasks: newTasks };
    }),

  addNote: (note) =>
    set((state) => {
      const newNotes = [
        ...state.notes,
        { ...note, id: crypto.randomUUID(), createdAt: new Date() }
      ];
      storage.set('notes', newNotes);
      return { notes: newNotes };
    }),

  addExpense: (expense) =>
    set((state) => {
      const newExpenses = [
        ...state.expenses,
        { ...expense, id: crypto.randomUUID(), date: new Date().toISOString() }
      ];
      storage.set('expenses', newExpenses);
      return { expenses: newExpenses };
    }),

  addReminder: (reminder) =>
    set((state) => {
      const newReminders = [
        ...state.reminders,
        { ...reminder, id: crypto.randomUUID() }
      ];
      storage.set('reminders', newReminders);
      return { reminders: newReminders };
    }),

  addHabit: (habit) =>
    set((state) => {
      const newHabits = [
        ...state.habits,
        { ...habit, id: crypto.randomUUID() }
      ];
      storage.set('habits', newHabits);
      return { habits: newHabits };
    }),

  addGoal: (goal) =>
    set((state) => {
      const newGoals = [
        ...state.goals,
        { ...goal, id: crypto.randomUUID() }
      ];
      storage.set('goals', newGoals);
      return { goals: newGoals };
    }),

  toggleTaskComplete: (id) =>
    set((state) => {
      const newTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      storage.set('tasks', newTasks);
      return { tasks: newTasks };
    }),

  updateTask: (id, updatedTask) =>
    set((state) => {
      const newTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      );
      storage.set('tasks', newTasks);
      return { tasks: newTasks };
    }),

  updateNote: (id, updatedNote) =>
    set((state) => {
      const newNotes = state.notes.map((note) =>
        note.id === id ? { ...note, ...updatedNote } : note
      );
      storage.set('notes', newNotes);
      return { notes: newNotes };
    }),

  deleteTask: (id) =>
    set((state) => {
      const newTasks = state.tasks.filter((task) => task.id !== id);
      storage.set('tasks', newTasks);
      return { tasks: newTasks };
    }),

  deleteNote: (id) =>
    set((state) => {
      const newNotes = state.notes.filter((note) => note.id !== id);
      storage.set('notes', newNotes);
      return { notes: newNotes };
    }),

  deleteExpense: (id) =>
    set((state) => {
      const newExpenses = state.expenses.filter((expense) => expense.id !== id);
      storage.set('expenses', newExpenses);
      return { expenses: newExpenses };
    }),
}));