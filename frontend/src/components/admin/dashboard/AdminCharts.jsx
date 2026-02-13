import React from 'react';

const AdminCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      
      {/* Chart 1: Distribution */}
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-8">
           <div>
              <h3 className="text-lg font-bold text-gray-900">Complaints by Category</h3>
              <p className="text-sm text-gray-500 mt-1">Distribution across different categories</p>
           </div>
           <select className="bg-gray-50 border-none text-sm font-medium text-gray-600 rounded-lg px-3 py-2 cursor-pointer outline-none hover:bg-gray-100 transition-colors">
              <option>All Time</option>
              <option>This Month</option>
           </select>
        </div>
        
        {/* Placeholder for Chart Visual - Replacing library dependency with CSS bars for now */}
        <div className="h-64 flex items-end justify-between gap-4 px-4">
           {/* Bar 1 */}
           <div className="w-full flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-full bg-blue-500 rounded-t-xl h-[80%] opacity-90 group-hover:opacity-100 transition-all relative group-hover:scale-y-105 origin-bottom"></div>
              <span className="text-xs text-gray-400 font-medium">Roads</span>
           </div>
           {/* Bar 2 */}
           <div className="w-full flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-full bg-emerald-500 rounded-t-xl h-[45%] opacity-90 group-hover:opacity-100 transition-all relative group-hover:scale-y-105 origin-bottom"></div>
              <span className="text-xs text-gray-400 font-medium">Waste</span>
           </div>
           {/* Bar 3 */}
           <div className="w-full flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-full bg-orange-400 rounded-t-xl h-[60%] opacity-90 group-hover:opacity-100 transition-all relative group-hover:scale-y-105 origin-bottom"></div>
              <span className="text-xs text-gray-400 font-medium">Lights</span>
           </div>
           {/* Bar 4 */}
           <div className="w-full flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-full bg-purple-500 rounded-t-xl h-[30%] opacity-90 group-hover:opacity-100 transition-all relative group-hover:scale-y-105 origin-bottom"></div>
              <span className="text-xs text-gray-400 font-medium">Water</span>
           </div>
           {/* Bar 5 */}
           <div className="w-full flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-full bg-pink-500 rounded-t-xl h-[25%] opacity-90 group-hover:opacity-100 transition-all relative group-hover:scale-y-105 origin-bottom"></div>
              <span className="text-xs text-gray-400 font-medium">Other</span>
           </div>
        </div>
      </div>

      {/* Chart 2: Resolution Trend */}
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-8">
           <div>
              <h3 className="text-lg font-bold text-gray-900">Resolution Trend</h3>
              <p className="text-sm text-gray-500 mt-1">Monthly resolved vs pending complaints</p>
           </div>
           <select className="bg-gray-50 border-none text-sm font-medium text-gray-600 rounded-lg px-3 py-2 cursor-pointer outline-none hover:bg-gray-100 transition-colors">
              <option>6 Months</option>
              <option>1 Year</option>
           </select>
        </div>

        {/* Visual representation of a Line Chart using SVG */}
        <div className="h-64 relative">
            <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                {/* Grid Lines */}
                <line x1="0" y1="0" x2="100" y2="0" stroke="#f3f4f6" strokeWidth="0.5" strokeDasharray="2" />
                <line x1="0" y1="12.5" x2="100" y2="12.5" stroke="#f3f4f6" strokeWidth="0.5" strokeDasharray="2" />
                <line x1="0" y1="25" x2="100" y2="25" stroke="#f3f4f6" strokeWidth="0.5" strokeDasharray="2" />
                <line x1="0" y1="37.5" x2="100" y2="37.5" stroke="#f3f4f6" strokeWidth="0.5" strokeDasharray="2" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="#f3f4f6" strokeWidth="0.5" strokeDasharray="2" />

                {/* Green Line (Resolved) */}
                <path 
                    d="M0,35 Q20,25 40,28 T80,15 T100,20" 
                    fill="none" 
                    stroke="#10B981" 
                    strokeWidth="1.5"
                    strokeLinecap="round" 
                />
                {/* Green Dots */}
                <circle cx="0" cy="35" r="1.5" fill="#10B981" className="animate-pulse" />
                <circle cx="40" cy="28" r="1.5" fill="#10B981" />
                <circle cx="80" cy="15" r="1.5" fill="#10B981" />
                <circle cx="100" cy="20" r="1.5" fill="#10B981" />

                {/* Orange Line (Pending) */}
                <path 
                    d="M0,45 Q20,42 40,44 T80,48 T100,49" 
                    fill="none" 
                    stroke="#F59E0B" 
                    strokeWidth="1.5"
                    strokeLinecap="round" 
                />
                 {/* Orange Dots */}
                 <circle cx="0" cy="45" r="1.5" fill="#F59E0B" />
                 <circle cx="40" cy="44" r="1.5" fill="#F59E0B" />
                 <circle cx="100" cy="49" r="1.5" fill="#F59E0B" />
            </svg>

            {/* X-Axis Labels */}
            <div className="flex justify-between text-xs text-gray-400 mt-4 px-2">
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
                <span>Jan</span>
            </div>
            
            {/* Legend */}
            <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-bold text-gray-600">Resolved</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="text-xs font-bold text-gray-600">Pending</span>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default AdminCharts;