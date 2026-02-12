import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate hook

const ComplaintsTable = () => {
  const navigate = useNavigate(); // 2. Initialize navigation

  const complaints = [
    { 
      id: 'CMP-001', 
      title: 'Broken Street Light', 
      author: 'Sarah Johnson',
      category: 'Street Lighting', 
      location: 'Main St & 5th Ave', 
      status: 'In Progress', 
      date: '2026-02-05', 
      priority: 'High',
      image: 'https://images.unsplash.com/photo-1578308148355-6e1b5300f134?w=150&h=150&fit=crop'
    },
    // ... (rest of your data stays the same) ...
    { 
      id: 'CMP-002', 
      title: 'Large Pothole', 
      author: 'Michael Chen',
      category: 'Road Maintenance', 
      location: 'Highway 101, Mile 23', 
      status: 'Resolved', 
      date: '2026-01-28', 
      priority: 'High',
      image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=150&h=150&fit=crop'
    },
    { 
      id: 'CMP-003', 
      title: 'Illegal Dumping', 
      author: 'Community Park',
      category: 'Waste', 
      location: 'Community Park North', 
      status: 'Pending', 
      date: '2026-02-10', 
      priority: 'Medium',
      image: 'https://images.unsplash.com/photo-1530587191026-aa1cfa4746b5?w=150&h=150&fit=crop'
    },
    { 
      id: 'CMP-004', 
      title: 'Broken Water Main', 
      author: 'David Kim', 
      category: 'Water & Sewage', 
      location: 'Oak Street, Block 400', 
      status: 'In Progress', 
      date: '2026-02-09', 
      priority: 'High',
      image: 'https://images.unsplash.com/photo-1583305727962-d480b480f8eb?w=150&h=150&fit=crop'
    },
  ];

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      
      {/* Header */}
      <div className="p-8 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
         <div>
            <h2 className="text-xl font-bold text-gray-900">Recent Complaints</h2>
            <p className="text-gray-500 text-sm mt-1">Latest civic issues reported by citizens</p>
         </div>
         {/* Updated to use navigate for the report button too */}
         <button 
            onClick={() => navigate('/dashboard/report')}
            className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-sm"
         >
            Report New Issue
         </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50/50">
            <tr>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">ID</th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Title</th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Category</th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Location</th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Priority</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {complaints.map((item) => (
              <tr 
                key={item.id} 
                onClick={() => navigate(`/dashboard/complaint/${item.id}`)} // 3. CLICK HANDLER ADDED HERE
                className="hover:bg-gray-50/80 transition-colors group cursor-pointer" // cursor-pointer ensures the hand icon appears
              >
                <td className="px-8 py-6 text-sm font-medium text-gray-900 whitespace-nowrap">{item.id}</td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt="" className="w-12 h-12 rounded-xl object-cover shadow-sm" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">{item.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">by {item.author}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 text-sm text-gray-600 font-medium">{item.category}</td>
                <td className="px-8 py-6 text-sm text-gray-500 max-w-[200px]">{item.location}</td>
                <td className="px-8 py-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${
                    item.status === 'Resolved' ? 'bg-green-50 text-green-700 border-green-200' : 
                    item.status === 'In Progress' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                    'bg-orange-50 text-orange-700 border-orange-200'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-8 py-6 text-sm text-gray-500 whitespace-nowrap">{item.date}</td>
                <td className="px-8 py-6">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold border ${
                    item.priority === 'High' ? 'bg-red-50 text-red-600 border-red-100' : 
                    item.priority === 'Medium' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' : 
                    'bg-gray-100 text-gray-600 border-gray-200'
                  }`}>
                    {item.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer */}
      <div className="px-8 py-6 border-t border-gray-100 bg-gray-50/30">
          <p className="text-xs text-gray-400 text-center">Showing latest 4 issues</p>
      </div>

    </div>
  );
};

export default ComplaintsTable;