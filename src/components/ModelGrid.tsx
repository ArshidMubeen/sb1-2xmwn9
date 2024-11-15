import React from 'react';
import ModelCard from './ModelCard';

const models = [
  {
    name: 'GPT-4 Turbo',
    description: 'Advanced language model with enhanced capabilities for complex tasks and reasoning',
    type: 'LLM',
    category: 'Text Generation',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    scores: {
      accuracy: 9.8,
      performance: 9.5,
      reliability: 9.7,
      overall: 9.7
    }
  },
  {
    name: 'Code Copilot Pro',
    description: 'AI-powered coding assistant with real-time suggestions and code analysis',
    type: 'Agent',
    category: 'Code',
    image: 'https://images.unsplash.com/photo-1678382156212-f1df773487c5?auto=format&fit=crop&q=80&w=800',
    scores: {
      accuracy: 9.3,
      performance: 9.6,
      reliability: 9.4,
      overall: 9.4
    }
  },
  {
    name: 'DALL-E 3',
    description: 'State-of-the-art image generation model with unprecedented detail and accuracy',
    type: 'LLM',
    category: 'Image',
    image: 'https://images.unsplash.com/photo-1686191128892-3f10f6aeb773?auto=format&fit=crop&q=80&w=800',
    scores: {
      accuracy: 9.5,
      performance: 9.2,
      reliability: 9.6,
      overall: 9.4
    }
  }
];

const ModelGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {models.map((model, index) => (
        <ModelCard key={index} {...model} />
      ))}
    </div>
  );
};

export default ModelGrid;