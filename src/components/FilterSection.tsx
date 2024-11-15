import React from 'react';

interface FilterProps {
  onFilterChange: (category: string, value: string) => void;
}

const FilterSection = ({ onFilterChange }: FilterProps) => {
  const categories = ['All', 'Text Generation', 'Code', 'Image', 'Audio'];
  const types = ['All', 'LLM', 'Agent'];
  const capabilities = ['All', 'Fine-tuning', 'API Access', 'Customization'];

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category}
                onChange={(e) => onFilterChange('category', e.target.value)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Type</h3>
        <div className="space-y-2">
          {types.map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="radio"
                name="type"
                value={type}
                onChange={(e) => onFilterChange('type', e.target.value)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Capabilities</h3>
        <div className="space-y-2">
          {capabilities.map((capability) => (
            <label key={capability} className="flex items-center">
              <input
                type="checkbox"
                value={capability}
                onChange={(e) => onFilterChange('capability', e.target.value)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-gray-700">{capability}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;