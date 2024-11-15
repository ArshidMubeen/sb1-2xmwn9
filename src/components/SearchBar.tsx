import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  return (
    <div className="relative max-w-xl w-full">
      <input
        type="text"
        placeholder="Search LLMs, Agents, or Features..."
        className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
};

export default SearchBar;