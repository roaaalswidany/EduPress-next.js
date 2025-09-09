import React from "react";
import {
  Palette,
  Code,
  Users,
  Video,
  TrendingUp,
  FileText,
  DollarSign,
  Atom,
} from "lucide-react";

const categories = [
  { name: "Art & Design", icon: <Palette className="w-8 h-8 text-orange-500" /> },
  { name: "Development", icon: <Code className="w-8 h-8 text-orange-500" /> },
  { name: "Communication", icon: <Users className="w-8 h-8 text-orange-500" /> },
  { name: "Videography", icon: <Video className="w-8 h-8 text-orange-500" /> },
  { name: "Marketing", icon: <TrendingUp className="w-8 h-8 text-orange-500" /> },
  { name: "Content Writing", icon: <FileText className="w-8 h-8 text-orange-500" /> },
  { name: "Finance", icon: <DollarSign className="w-8 h-8 text-orange-500" /> },
  { name: "Science", icon: <Atom className="w-8 h-8 text-orange-500" /> },
];

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="flex justify-between items-center mb-10">
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-2">Top Categories</h2>
            <p className="text-gray-600">Explore our Popular Categories</p>
          </div>
          <button className="px-5 py-2 border rounded-full text-gray-700 hover:bg-gray-100 transition">
            All Categories
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-gray-50 hover:bg-white shadow-sm hover:shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition"
            >
              {cat.icon}
              <h3 className="font-medium text-gray-900 mt-3">{cat.name}</h3>
              <p className="text-gray-500 text-sm">38 Courses</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;