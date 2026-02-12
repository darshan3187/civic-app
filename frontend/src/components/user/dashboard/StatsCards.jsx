import React from 'react';
import { AlertCircle, Clock, CheckCircle2, TrendingUp } from 'lucide-react';

const StatsCards = () => {
  const stats = [
    { 
      label: 'Total Complaints', 
      value: '6', 
      subtext: '+12% from last month', 
      subtextColor: 'text-emerald-600',
      icon: AlertCircle, 
      iconColor: 'text-white', 
      iconBg: 'bg-blue-500' 
    },
    { 
      label: 'Pending', 
      value: '1', 
      subtext: 'Awaiting review', 
      subtextColor: 'text-orange-600',
      icon: Clock, 
      iconColor: 'text-white', 
      iconBg: 'bg-orange-500' 
    },
    { 
      label: 'In Progress', 
      value: '2', 
      subtext: 'Being resolved', 
      subtextColor: 'text-blue-600',
      icon: TrendingUp, 
      iconColor: 'text-white', 
      iconBg: 'bg-indigo-500' 
    },
    { 
      label: 'Resolved', 
      value: '3', 
      subtext: 'Successfully completed', 
      subtextColor: 'text-green-600',
      icon: CheckCircle2, 
      iconColor: 'text-white', 
      iconBg: 'bg-green-500' 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <h3 className="text-4xl font-extrabold text-gray-900 mt-2">{stat.value}</h3>
            </div>
            <div className={`p-3 rounded-full ${stat.iconBg} shadow-lg shadow-indigo-100`}>
              <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
            </div>
          </div>
          <div className={`flex items-center text-sm font-semibold ${stat.subtextColor}`}>
             {stat.subtext}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;