import React from 'react';
import { Eye, MoreHorizontal, ArrowUpRight } from 'lucide-react';

const AdminComplaintsTable = () => {
  const complaints = [
    { 
      id: 'CMP-001', 
      title: 'Broken Street Light on Main Street', 
      author: 'Sarah Johnson',
      category: 'Street Lighting', 
      status: 'In Progress', 
      priority: 'High',
      date: '2026-02-05',
      image: 'https://images.unsplash.com/photo-1578308148355-6e1b5300f134?w=150&h=150&fit=crop'
    },
    { 
      id: 'CMP-002', 
      title: 'Large Pothole on Highway 101', 
      author: 'Michael Chen',
      category: 'Road Maintenance', 
      status: 'Resolved', 
      priority: 'High',
      date: '2026-01-28',
      image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=150&h=150&fit=crop'
    },
    { 
      id: 'CMP-003', 
      title: 'Illegal Dumping in Community Park', 
      author: 'Emily Rodriguez',
      category: 'Waste Management', 
      status: 'Pending', 
      priority: 'Medium',
      date: '2026-02-10',
      image: 'https://images.unsplash.com/photo-1530587191026-aa1cfa4746b5?w=150&h=150&fit=crop'
    },
    { 
      id: 'CMP-004', 
      title: 'Broken Water Main', 
      author: 'David Kim', 
      category: 'Water & Sewage', 
      status: 'In Progress', 
      priority: 'High',
      date: '2026-02-09',
      image: 'https://images.unsplash.com/photo-1583305727962-d480b480f8eb?w=150&h=150&fit=crop'
    },
  ];

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mt-8">
      
      {/* Header & Filters */}
      <div className="p-8 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
         <div>
            <h2 className="text-xl font-bold text-gray-900">All Complaints</h2>
            <p className="text-gray-500 text-sm mt-1">Manage and track all civic complaints</p>
         </div>
         
         <div className="flex items-center gap-3">
            <select className="bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700 rounded-xl px-4 py-2.5 cursor-pointer outline-none hover:bg-gray-100 transition-colors">
               <option>All Status</option>
               <option>Pending</option>
               <option>In Progress</option>
               <option>Resolved</option>
            </select>
            <select className="bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700 rounded-xl px-4 py-2.5 cursor-pointer outline-none hover:bg-gray-100 transition-colors">
               <option>All Priority</option>
               <option>High</option>
               <option>Medium</option>
               <option>Low</option>
            </select>
         </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50/50">
            <tr>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">ID</th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Title</th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Category</th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Priority</th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</th>
              <th className="px-8 py-4 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {complaints.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/80 transition-colors group">
                <td className="px-8 py-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                   <div className="flex flex-col">
                      <span>{item.id}</span>
                   </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4 min-w-[280px]">
                    <img src={item.image} alt="" className="w-10 h-10 rounded-lg object-cover shadow-sm" />
                    <div>
                      <p className="text-sm font-bold text-gray-900 truncate max-w-[200px]">{item.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.author}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 text-sm text-gray-600 font-medium">{item.category}</td>
                <td className="px-8 py-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${
                    item.status === 'Resolved' ? 'bg-green-50 text-green-700 border-green-200' : 
                    item.status === 'In Progress' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                    'bg-orange-50 text-orange-700 border-orange-200'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-8 py-6">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold border ${
                    item.priority === 'High' ? 'bg-red-50 text-red-600 border-red-100' : 
                    item.priority === 'Medium' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' : 
                    'bg-gray-100 text-gray-600 border-gray-200'
                  }`}>
                    {item.priority}
                  </span>
                </td>
                <td className="px-8 py-6 text-sm text-gray-500 whitespace-nowrap">
                   <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{item.date}</span>
                      <span className="text-xs">09:41 AM</span>
                   </div>
                </td>
                <td className="px-8 py-6 text-right">
                   <button className="text-sm font-semibold text-gray-600 hover:text-[#1E3A8A] transition-colors flex items-center gap-1 ml-auto">
                      Manage
                      <ArrowUpRight size={16} />
                   </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer Pagination */}
      <div className="px-8 py-6 border-t border-gray-100 bg-gray-50/30 flex justify-between items-center">
          <p className="text-xs text-gray-400">Showing 4 of 128 complaints</p>
          <div className="flex gap-2">
             <button className="px-3 py-1 text-xs font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50">Previous</button>
             <button className="px-3 py-1 text-xs font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">Next</button>
          </div>
      </div>

    </div>
  );
};

export default AdminComplaintsTable;