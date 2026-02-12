import React from 'react';
import { Upload, MapPin, Camera, Navigation, Send } from 'lucide-react';

const ReportIssueForm = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Report Civic Issue</h1>
        <p className="text-gray-500 mt-2 text-lg">Help us improve our community by reporting civic issues that need attention.</p>
      </div>

      {/* Main Form Container */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden p-8">
        
        <form className="space-y-8">
          
          {/* 1. Issue Photo Upload */}
          <div className="space-y-4">
             <label className="block text-sm font-bold text-gray-900">Issue Photo</label>
             <p className="text-sm text-gray-500">Upload a clear photo of the issue to help authorities understand the problem</p>
             
             {/* CHANGED: border-gray-200 -> border-gray-400 for a brighter/more visible border */}
             <div className="border-2 border-dashed border-gray-400 rounded-3xl p-12 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 bg-blue-50 text-[#1E3A8A] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <Upload className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Drop your image here, or <span className="text-[#1E3A8A]">browse</span></h3>
                <p className="text-sm text-gray-400 mt-2">PNG, JPG up to 10MB</p>
             </div>
          </div>

          {/* 2. Issue Title */}
          <div className="space-y-2">
             <label className="block text-sm font-bold text-gray-900">Issue Title *</label>
             <input 
               type="text" 
               placeholder="Brief, descriptive title of the issue"
               className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#1E3A8A] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-gray-900 placeholder-gray-400"
             />
          </div>

          {/* 3. Category & Location Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-900">Category *</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#1E3A8A] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-gray-900 cursor-pointer appearance-none">
                   <option value="">Select category</option>
                   <option value="roads">Road Maintenance</option>
                   <option value="lighting">Street Lighting</option>
                   <option value="waste">Garbage & Waste</option>
                   <option value="water">Water & Sewage</option>
                </select>
             </div>

             <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-900">Location *</label>
                <div className="relative">
                   <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                   <input 
                     type="text" 
                     placeholder="Street address or landmark"
                     className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#1E3A8A] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-gray-900 placeholder-gray-400"
                   />
                </div>
             </div>
          </div>

          {/* 4. Map Placeholder */}
          <div className="space-y-2">
             <label className="block text-sm font-bold text-gray-900">Location on Map</label>
             <p className="text-sm text-gray-500">Click on the map to pinpoint the exact location</p>
             <div className="h-64 bg-slate-100 rounded-3xl flex flex-col items-center justify-center text-gray-400 border border-slate-200">
                <MapPin className="w-10 h-10 mb-3 opacity-50" />
                <p className="font-medium">Interactive map would be integrated here</p>
                <p className="text-sm opacity-70">(Google Maps / Mapbox integration)</p>
             </div>
          </div>

          {/* 5. Detailed Description */}
          <div className="space-y-2">
             <label className="block text-sm font-bold text-gray-900">Detailed Description *</label>
             <textarea 
               rows="4"
               placeholder="Provide detailed information about the issue, when you noticed it, and any other relevant details..."
               className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#1E3A8A] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-gray-900 placeholder-gray-400 resize-none"
             ></textarea>
          </div>

          {/* 6. Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
             <button type="button" className="px-8 py-4 bg-[#1E3A8A] text-white font-bold rounded-2xl hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
                <Send className="w-5 h-5" />
                Submit Complaint
             </button>
             <button type="button" className="px-8 py-4 bg-sky-50 text-sky-700 font-bold rounded-2xl hover:bg-sky-100 transition-colors flex items-center justify-center">
                Cancel
             </button>
          </div>

        </form>
      </div>

      {/* Info Cards Section (Bottom) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
         {/* Card 1 */}
         <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#1E3A8A] mb-4">
               <Camera className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900">Clear Photo</h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
               Take a well-lit photo showing the complete issue to help authorities assess it quickly.
            </p>
         </div>

         {/* Card 2 */}
         <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4">
               <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900">Accurate Location</h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
               Provide precise location details or coordinates to ensure quick response teams find it.
            </p>
         </div>

         {/* Card 3 */}
         <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mb-4">
               <Navigation className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900">Detailed Info</h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
               Include all relevant details like time of occurrence and potential hazards to help resolve faster.
            </p>
         </div>

      </div>

    </div>
  );
};

export default ReportIssueForm;