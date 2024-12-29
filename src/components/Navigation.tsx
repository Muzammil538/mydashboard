import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CheckSquare, 
  StickyNote, 
  DollarSign,
  Calculator as CalcIcon
} from 'lucide-react';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, icon: Icon, children }: { to: string; icon: any; children: React.ReactNode }) => (
    <Link
      to={to}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
        isActive(to)
          ? 'bg-blue-500 text-white'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{children}</span>
    </Link>
  );

  return (
    <nav className="flex items-center gap-2 mb-8">
      <NavLink to="/" icon={LayoutDashboard}>Dashboard</NavLink>
      <NavLink to="/tasks" icon={CheckSquare}>Tasks</NavLink>
      <NavLink to="/notes" icon={StickyNote}>Notes</NavLink>
      <NavLink to="/expenses" icon={DollarSign}>Expenses</NavLink>
    </nav>
  );
};