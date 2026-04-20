import Link from "next/link";
import { Search, Play, Heart } from "lucide-react";
import StoryCard from "@/components/StoryCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center border-b border-surface-hover/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2500&auto=format&fit=crop" alt="Hero background" className="w-full h-full object-cover opacity-50 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent"></div>
        </div>
        
        <section className="container mx-auto px-4 relative z-10 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2A2400] mb-6">
              <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-widest">NICHE SPORTS PLATFORM</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
              <span className="text-white block drop-shadow-lg">FUEL YOUR</span>
              <span className="text-brand-yellow block drop-shadow-lg">PURSUIT</span>
            </h1>
            
            <p className="text-lg text-zinc-300 max-w-xl mb-10 leading-relaxed drop-shadow-md font-medium">
              A centralized hub for the wrestling and athletics community to share journeys, celebrate success, and inspire the next generation of champions.
            </p>
            
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <input 
                  type="text" 
                  placeholder="Search athletes, sports, or stories..." 
                  className="w-full bg-surface/80 backdrop-blur pl-12 pr-4 py-3.5 rounded-full text-white placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow border border-surface-hover"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-brand-yellow text-black font-bold px-6 rounded-full hover:bg-yellow-400 transition-colors text-sm">
                  Search
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Link 
                href="/stories" 
                className="px-8 py-3.5 bg-brand-yellow text-black rounded-full font-bold hover:bg-yellow-400 transition-colors text-sm"
              >
                Explore Stories
              </Link>
              <Link 
                href="/submit" 
                className="px-8 py-3.5 bg-surface/80 backdrop-blur text-white rounded-full font-bold hover:bg-surface transition-colors border border-surface-hover text-sm"
              >
                Share Journey
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Admin's Top 8 Picks */}
      <section id="admin-picks" className="container mx-auto px-4 py-12 pb-24">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Admin's Top 8 Picks</h2>
            <p className="text-muted text-sm">Handpicked motivational content featuring the most inspiring journeys.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 border border-brand-yellow text-brand-yellow rounded-lg text-sm font-bold">
            👑 Featured
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <StoryCard key={i} index={i} />
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link href="/stories" className="px-8 py-4 bg-surface border border-surface-hover text-white rounded-full font-bold hover:bg-surface-hover transition-colors text-sm flex items-center gap-2">
            Explore All Stories
          </Link>
        </div>
      </section>
    </div>
  );
}


