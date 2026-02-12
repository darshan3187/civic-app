import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // 1. Import Link

const HomeIntroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              
              {/* Main Headline */}
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Report Civic Issues.</span>{' '}
                <span className="block text-[#0F5C86]">Track Resolution.</span>
              </h1>
              
              {/* Subheadline */}
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Empower your community with a transparent, digital grievance redressal system. Submit complaints, monitor status, and ensure municipal accountability in real-time.
              </p>
              
              {/* Call to Action Buttons */}
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                
                {/* Button 1: Report Issue */}
                <div className="rounded-md shadow">
                  <Link 
                    to="/dashboard" // Changed to Link
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1E3A8A] hover:bg-[#152C6F] md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Report an Issue <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
                
                {/* Button 2: View Live Dashboard */}
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link 
                    to="/dashboard" // Changed to Link
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#0F5C86] bg-indigo-50 hover:bg-indigo-100 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    View Live Dashboard
                  </Link>
                </div>
                
              </div>

              {/* Key Metrics / Social Proof */}
              <div className="mt-10 grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">1,247</div>
                  <div className="text-sm text-gray-500 mt-1">Issues Resolved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">3.2 Days</div>
                  <div className="text-sm text-gray-500 mt-1">Avg. Response Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-500 mt-1">Citizen Satisfaction</div>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Smart city urban infrastructure"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent lg:via-white/20"></div>
      </div>
    </div>
  );
};

export default HomeIntroSection;