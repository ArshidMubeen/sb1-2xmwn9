import React from 'react';
import { Star, Zap, Brain, Activity } from 'lucide-react';

interface ModelScore {
  accuracy: number;
  performance: number;
  reliability: number;
  overall: number;
}

interface ModelProps {
  name: string;
  description: string;
  type: 'LLM' | 'Agent';
  category: string;
  image: string;
  scores: ModelScore;
}

const ModelCard = ({ name, description, type, category, image, scores }: ModelProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
          {type}
        </span>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-indigo-600">{category}</p>
          </div>
          <div className="flex items-center bg-indigo-50 px-2 py-1 rounded-full">
            <Star className="h-4 w-4 text-indigo-600" />
            <span className="ml-1 text-sm font-semibold text-indigo-600">{scores.overall}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center">
            <Brain className="h-4 w-4 text-indigo-600 mr-2" />
            <span className="text-sm text-gray-600">{scores.accuracy}</span>
          </div>
          <div className="flex items-center">
            <Zap className="h-4 w-4 text-indigo-600 mr-2" />
            <span className="text-sm text-gray-600">{scores.performance}</span>
          </div>
          <div className="flex items-center">
            <Activity className="h-4 w-4 text-indigo-600 mr-2" />
            <span className="text-sm text-gray-600">{scores.reliability}</span>
          </div>
        </div>

        <button className="w-full bg-gray-50 text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ModelCard;