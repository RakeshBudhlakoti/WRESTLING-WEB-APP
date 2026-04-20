import Link from "next/link";
import { Filter, Search, Play, Heart } from "lucide-react";
import StoryCard from "@/components/StoryCard";

export default function StoriesListing() {
  return (
    <div className="flex-1 bg-background text-white pb-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h1 className="text-5xl font-black tracking-tight text-white mb-2">Explore Stories</h1>
            <p className="text-muted">Discover inspiring journeys from athletes worldwide.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input 
                type="text" 
                placeholder="Search stories..." 
                className="w-full pl-12 pr-4 py-3 bg-surface border border-surface-hover rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-yellow text-white placeholder-muted"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-surface border border-surface-hover rounded-xl hover:bg-surface-hover transition-colors font-bold text-sm">
              <Filter className="w-4 h-4" /> Filters
            </button>
          </div>
        </div>

        {/* Categories / Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {['All Categories', 'Wrestling', 'Track & Field', 'Basketball', 'Football', 'Swimming'].map((tag, idx) => (
            <button key={tag} className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${idx === 0 ? 'bg-brand-yellow text-black' : 'bg-surface border border-surface-hover text-muted hover:text-white'}`}>
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <StoryCard key={i} index={i} />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3.5 bg-surface border border-surface-hover text-white font-bold rounded-xl hover:bg-surface-hover transition-colors">
            Load More Stories
          </button>
        </div>
      </div>
    </div>
  );
}


