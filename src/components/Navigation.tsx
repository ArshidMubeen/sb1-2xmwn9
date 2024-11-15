import React from 'react';
import { Search } from 'lucide-react';
import { Brain } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold">AI Marketplace</span>
          </div>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search AI models, agents, or features..."
                className="w-full px-4 py-2 pl-10 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <a href="/testing" className="text-gray-600 hover:text-gray-900">Testing Suite</a>
            <a href="/developers" className="text-gray-600 hover:text-gray-900">For Developers</a>
            <a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;