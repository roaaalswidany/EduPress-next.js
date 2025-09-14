'use client';

import { useState } from 'react';
import { Grid, List } from 'lucide-react';

interface ToolbarProps {
  onSearch: (query: string) => void;
  view: 'grid' | 'list';
  setView: (view: 'grid' | 'list') => void;
}

const CoursesToolbar: React.FC<ToolbarProps> = ({ onSearch, view, setView }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
      {/* Search */}
      <form onSubmit={handleSubmit} className="w-full sm:w-1/3">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </form>

      {/* View Switcher */}
      <div className="flex gap-2">
        <button
          onClick={() => setView('grid')}
          className={`p-2 rounded-md ${view === 'grid' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'}`}
        >
          <Grid size={18} />
        </button>
        <button
          onClick={() => setView('list')}
          className={`p-2 rounded-md ${view === 'list' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'}`}
        >
          <List size={18} />
        </button>
      </div>
    </div>
  );
};

export default CoursesToolbar;