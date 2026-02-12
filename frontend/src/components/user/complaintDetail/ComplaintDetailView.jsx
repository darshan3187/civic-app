import React from 'react';
import { ArrowLeft, Calendar, MapPin, User, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComplaintDetailView = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Back Button */}
      <Link to="/dashboard" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </Link>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
           
           {/* Header Card */}
           <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex flex-wrap gap-3 mb-4">
                 <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-100">In Progress</span>
                 <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full border border-red-100">High Priority</span>
                 <span className="ml-auto text-xs text-gray-400 font-mono self-center">CMP-001</span>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Broken Street Light on Main Street</h1>
              
              <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-500 mt-4">
                 <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Sarah Johnson</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>2026-02-05</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Main Street & 5th Avenue</span>
                 </div>
              </div>
           </div>

           {/* Description Card */}
           <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                 The street light at the corner of Main Street and 5th Avenue has been non-functional for over a week, creating safety concerns for pedestrians at night. It seems like the bulb is flickering and then going completely dark.
              </p>
           </div>

           {/* Photo Card */}
           <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Issue Photo</h3>
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 relative">
                 <img 
                   src="https://images.unsplash.com/photo-1578308148355-6e1b5300f134?w=1000&h=600&fit=crop" 
                   alt="Evidence" 
                   className="w-full h-full object-cover"
                 />
              </div>
           </div>

        </div>

        {/* RIGHT COLUMN (1/3 width) - Timeline & Quick Info */}
        <div className="space-y-6">
           
           {/* Timeline Card */}
           <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-6">Timeline</h3>
              
              <div className="space-y-8 relative pl-2">
                 {/* Vertical Line */}
                 <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gray-100"></div>

                 {/* Step 1 */}
                 <div className="relative flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center relative z-10 shrink-0">
                       <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-gray-900">Submitted</p>
                       <p className="text-xs text-gray-500 mt-0.5">Complaint submitted by citizen</p>
                       <p className="text-[10px] text-gray-400 mt-1">2026-02-05 • Sarah Johnson</p>
                    </div>
                 </div>

                 {/* Step 2 */}
                 <div className="relative flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center relative z-10 shrink-0">
                       <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-gray-900">Under Review</p>
                       <p className="text-xs text-gray-500 mt-0.5">Assigned to maintenance team</p>
                       <p className="text-[10px] text-gray-400 mt-1">2026-02-06 • Admin</p>
                    </div>
                 </div>

                 {/* Step 3 (Current) */}
                 <div className="relative flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 shadow-lg shadow-blue-200 flex items-center justify-center relative z-10 shrink-0">
                       <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-blue-700">In Progress</p>
                       <p className="text-xs text-gray-500 mt-0.5">Repair crew dispatched to location</p>
                       <p className="text-[10px] text-gray-400 mt-1">2026-02-08 • Maintenance Team</p>
                    </div>
                 </div>

              </div>
           </div>

           {/* Quick Info Card */}
           <div className="bg-blue-50/50 rounded-3xl p-6 border border-blue-100">
              <h3 className="font-bold text-gray-900 mb-4">Quick Info</h3>
              <div className="space-y-3 text-sm">
                 <div className="flex justify-between">
                    <span className="text-gray-500">Complaint ID</span>
                    <span className="font-mono font-medium text-gray-900">CMP-001</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-gray-500">Category</span>
                    <span className="font-medium text-gray-900">Street Lighting</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-gray-500">Priority</span>
                    <span className="font-medium text-red-600">High</span>
                 </div>
                 <div className="flex justify-between pt-3 border-t border-blue-100">
                    <span className="text-gray-500">Submitted</span>
                    <span className="font-medium text-gray-900">2026-02-05</span>
                 </div>
              </div>
           </div>

        </div>

      </div>
    </div>
  );
};

export default ComplaintDetailView;