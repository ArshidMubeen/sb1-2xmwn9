import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CategoryTags from './components/CategoryTags';
import ModelGrid from './components/ModelGrid';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <Hero />
        <CategoryTags />
        <ModelGrid />
      </main>
    </div>
  );
}

export default App;