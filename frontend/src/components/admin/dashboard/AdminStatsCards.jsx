import React from 'react';
import { AlertTriangle, Clock, CheckCircle2, TrendingUp } from 'lucide-react';

const AdminStatsCards = () => {
  const stats = [
    {
      title: 'Total Complaints',
      value: '6',
      trend: '+8.2%',
      trendLabel: 'this month',
      trendUp: true,
      icon: AlertTriangle,
      color: 'bg-blue-500',
      textColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Pending Review',
      value: '1',
      trend: 'Needs attention',
      trendLabel: '',
      trendUp: false, // strictly for color logic
      icon: Clock,
      color: 'bg-orange-500',
      textColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
      isWarning: true,
    },
    {
      title: 'Resolution Rate',
      value: '77%',
      trend: '+5%',
      trendLabel: 'from last month',
      trendUp: true,
      icon: CheckCircle2,
      color: 'bg-emerald-500',
      textColor: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
    },
    {
      title: 'Avg Resolution',
      value: '3.2',
      unit: 'days',
      trend: '(improved)',
      trendLabel: '',
      trendUp: true,
      icon: TrendingUp,
      color: 'bg-purple-500',
      textColor: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.title}</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">
                {stat.value}
                {stat.unit && <span className="text-lg text-gray-400 font-normal ml-1">{stat.unit}</span>}
              </h3>
            </div>
            <div className={`p-3 rounded-xl ${stat.bgColor} ${stat.textColor}`}>
              <stat.icon size={22} />
            </div>
          </div>
          
          <div className="mt-4 flex items-center text-sm">
            {stat.isWarning ? (
               <span className="text-orange-600 font-medium bg-orange-50 px-2 py-0.5 rounded-md text-xs">
                 {stat.trend}
               </span>
            ) : (
               <span className={`font-bold ${stat.trendUp ? 'text-emerald-600' : 'text-red-600'}`}>
                 {stat.trend}
               </span>
            )}
            <span className="text-gray-400 ml-2 text-xs">{stat.trendLabel}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminStatsCards;