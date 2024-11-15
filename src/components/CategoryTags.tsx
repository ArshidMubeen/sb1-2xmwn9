import React from 'react';
import { Tag } from 'lucide-react';

const CategoryTags = () => {
  const categories = [
    'All Models',
    'Financial Analysis',
    'Banking Operations',
    'Insurance',
    'Text Generation',
    'Image Generation',
    'Code Assistant'
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {categories.map((category, index) => (
        <button
          key={category}
          className={`flex items-center px-6 py-2 rounded-full text-sm transition-colors ${
            index === 0 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Tag className="h-4 w-4 mr-2" />
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTags;