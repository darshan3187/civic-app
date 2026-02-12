import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, MapPin, Settings, User } from 'lucide-react';

const UserSidebar = ({ closeMobileMenu }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
    { icon: FileText, label: 'Report Issue', path: '/dashboard/report' },
    { icon: MapPin, label: 'Nearby Issues', path: '/dashboard/map' },
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      
      {/* MOBILE ONLY: User Profile Section */}
      {/* This is visible on mobile (block) but HIDDEN on desktop (lg:hidden) */}
      <div className="p-6 border-b border-gray-100 block lg:hidden">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-[#1E3A8A] font-bold shadow-sm">
            SJ
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 leading-none">Sarah Johnson</h3>
            <p className="text-[11px] text-gray-500 mt-1 font-medium">sarah@example.com</p>
          </div>
        </div>
        {/* Mobile Account Link */}
        <div className="mt-4">
            <button className="w-full py-2 flex items-center justify-center gap-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                <User size={16} />
                Manage Account
            </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2 mt-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeMobileMenu}
            end={item.path === '/dashboard'}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200 font-semibold text-sm ${
                isActive
                  ? 'bg-[#1E3A8A] text-white shadow-lg shadow-blue-900/20'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-[#1E3A8A]'
              }`
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section: Pro Card and Settings */}
      <div className="mt-auto">
        <div className="p-4 mx-4 mb-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100/50">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#1E3A8A] text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">Pro</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
            Upgrade for advanced analytics and priority support.
          </p>
          <button className="mt-3 w-full py-2 bg-[#1E3A8A] text-white text-xs font-bold rounded-xl hover:bg-blue-900 transition-colors shadow-sm">
            Upgrade Now
          </button>
        </div>

        <div className="p-4 border-t border-gray-100">
          <NavLink 
            to="/dashboard/settings"
            onClick={closeMobileMenu}
            className="flex items-center gap-4 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-colors font-semibold text-sm"
          >
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;