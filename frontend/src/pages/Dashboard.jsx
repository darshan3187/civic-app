import React from 'react';
// IMPORTING FROM THE NEW FOLDER INSIDE USER
import StatsCards from '../components/user/dashboard/StatsCards';
import ComplaintsTable from '../components/user/dashboard/ComplaintsTable';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
        <p className="text-gray-500 mt-2 text-lg">Welcome back! Here's an overview of your civic complaints.</p>
      </div>

      {/* 1. Stats Cards Component */}
      <StatsCards />

      {/* 2. Complaints Table Component */}
      <ComplaintsTable />

    </div>
  );
};

export default Dashboard;