import React from 'react';
import { Download, Filter } from 'lucide-react';
import AdminStatsCards from '../../components/admin/dashboard/AdminStatsCards';
import AdminCharts from '../../components/admin/dashboard/AdminCharts';
import AdminComplaintsTable from '../../components/admin/complaints/AdminComplaintsTable'; // <--- Import

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
           <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Admin Analytics</h1>
           <p className="text-gray-500 mt-1">Comprehensive overview of civic complaints and resolution metrics</p>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
              <Filter size={18} />
              Filter
           </button>
           <button className="flex items-center gap-2 px-4 py-2 bg-[#1E3A8A] text-white font-medium rounded-xl hover:bg-blue-900 transition-colors shadow-sm shadow-blue-900/20">
              <Download size={18} />
              Export Report
           </button>
        </div>
      </div>

      {/* Stats Cards */}
      <AdminStatsCards />

      {/* Charts Section */}
      <AdminCharts />

      {/* NEW: Complaints Table */}
      <AdminComplaintsTable />

    </div>
  );
};

export default AdminDashboard;  