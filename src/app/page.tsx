import Link from "next/link";
import { Search, Play, Heart } from "lucide-react";
import StoryCard from "@/components/StoryCard";

export default function Home() {
  const exclusiveVideos = [
    {
      id: '101',
      title: 'David Taylor',
      category: 'Wrestling',
      description: 'David Taylor and I philosophize about the side effects of Penn State dominating college wrestling',
      youtubeId: 'GkzTXHFekhE'
    },
    {
      id: '102',
      title: 'Tom Brands',
      category: 'Wrestling',
      description: 'Iowa head coach Tom Brands talks about his experience growing up and how parents can mold their children to become the best in wrestling and life',
      youtubeId: '4oohVOYAjK4'
    },
    {
      id: '103',
      title: 'Jax Forrest',
      category: 'Wrestling',
      description: 'The Phenom is here and how far will he go? Motivated by the power of God this wrestler could change the landscape of American wrestling',
      youtubeId: 'NTIk0vvjPZs'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] lg:min-h-screen flex flex-col justify-center border-b border-surface-hover/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2500&auto=format&fit=crop" alt="Hero background" className="w-full h-full object-cover opacity-50 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent"></div>
        </div>
        
        <section className="container mx-auto px-4 relative z-10 py-20 lg:py-32">
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

      {/* NLA Exclusive Videos */}
      <section className="container mx-auto px-4 py-12 lg:py-16 lg:pt-24">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">NLA Exclusive Videos</h2>
            <p className="text-muted text-sm">Exclusive wrestling and athletic content from our official channel.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 border-2 border-brand-red text-brand-red rounded-lg text-sm font-bold">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Official
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exclusiveVideos.map((video) => (
            <div key={video.id} className="bg-surface rounded-2xl overflow-hidden border border-surface-hover group transition-colors hover:border-surface-hover/80 h-full flex flex-col">
              <Link href={`/stories/${video.id}`} className="block relative h-48 w-full shrink-0 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60 z-10 pointer-events-none"></div>
                <img src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`} alt={video.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.5)] group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white text-white ml-1" />
                  </div>
                </div>
              </Link>
              <Link href={`/stories/${video.id}`} className="p-6 flex flex-col flex-1 block">
                <span className="text-[10px] font-black text-brand-red uppercase tracking-wider mb-2">NLA EXCLUSIVE</span>
                <h3 className="text-xl font-black text-white leading-tight mb-3 group-hover:text-brand-red transition-colors">
                  {video.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed line-clamp-3">
                  {video.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>

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


