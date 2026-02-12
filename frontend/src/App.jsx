import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import UserLayout from './layout/UserLayout';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ReportIssue from './pages/ReportIssue';
import ComplaintDetail from './pages/ComplaintDetail'; // <--- 1. Import new page

function App() {
  return (
    <Router>
      <Routes>
        
        {/* PUBLIC ROUTES */}
        <Route path="/" element={
           <>
             <Navbar />
             <Home />
             <Footer />
           </>
        } />
        
        <Route path="/login" element={<div>Login Page</div>} />

        {/* USER ROUTES */}
        <Route path="/dashboard" element={<UserLayout />}>
           <Route index element={<Dashboard />} />
           <Route path="report" element={<ReportIssue />} />
           
           {/* 2. Add the Detail Route with Dynamic ID */}
           <Route path="complaint/:id" element={<ComplaintDetail />} />
           
           <Route path="history" element={<div>My History Page</div>} />
           <Route path="map" element={<div>Map View</div>} />
           <Route path="settings" element={<div>Settings Page</div>} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;