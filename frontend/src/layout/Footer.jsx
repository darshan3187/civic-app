import React from 'react';
import { MapPin, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-200">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">CivicTrack</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering citizens to report issues, track resolutions, and build better communities together. Transparency starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Platform</h3>
            <ul className="md:space-y-3 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Report Issue</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Track Status</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Our Impact</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">City Map</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Support</h3>
            <ul className="md:space-y-3 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Community Guidelines</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Contact</h3>
            <ul className="md:space-y-3 space-y-2">
              <li className="flex items-center gap-2 text-gray-500 text-sm">
                <Mail className="w-4 h-4" />
                <span>support@civictrack.org</span>
              </li>
              <li className="flex items-center gap-2 text-gray-500 text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; 2026 CivicTrack. All rights reserved.
          </p>

          {/* Social Icons - Thinner & Cleaner */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;