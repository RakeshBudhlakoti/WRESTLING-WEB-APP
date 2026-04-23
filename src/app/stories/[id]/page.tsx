"use client";

import { useState, use } from "react";
import Link from "next/link";
import { Play, Heart, MessageCircle, Share2, Bookmark, X } from "lucide-react";

export default function StoryDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Dummy data
  const exclusiveVideos = {
    '101': {
      title: 'David Taylor',
      youtubeId: 'GkzTXHFekhE',
      description: 'David Taylor and I philosophize about the side effects of Penn State dominating college wrestling'
    },
    '102': {
      title: 'Tom Brands',
      youtubeId: '4oohVOYAjK4',
      description: 'Iowa head coach Tom Brands talks about his experience growing up and how parents can mold their children to become the best in wrestling and life'
    },
    '103': {
      title: 'Jax Forrest',
      youtubeId: 'NTIk0vvjPZs',
      description: 'The Phenom is here and how far will he go? Motivated by the power of God this wrestler could change the landscape of American wrestling'
    }
  };
  
  const exclusiveMatch = exclusiveVideos[id as keyof typeof exclusiveVideos];
  
  const isVideo = exclusiveMatch ? true : parseInt(id) % 2 === 0;
  const youtubeId = exclusiveMatch ? exclusiveMatch.youtubeId : "dQw4w9WgXcQ";
  const storyTitle = exclusiveMatch ? exclusiveMatch.title : "The Road to State: Overcoming the Impossible";

  
  return (
    <div className="flex-1 bg-background text-gray-900 pb-20">
      {/* Video Modal Popup */}
      {isPlaying && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 p-4 animate-in fade-in duration-200">
          <button 
            onClick={() => setIsPlaying(false)}
            className="absolute top-6 right-6 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-50"
          >
            <X className="w-6 h-6 text-gray-900" />
          </button>
          <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-white shadow-2xl relative">
            <iframe 
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      {/* Hero Media */}
      <div className="w-full h-[60vh] md:h-[70vh] relative bg-white group">
        <img 
          src={isVideo ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2000&auto=format&fit=crop"} 
          alt="Story Cover" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none"></div>
        
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button 
              onClick={() => setIsPlaying(true)}
              className="w-24 h-24 bg-brand-yellow/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-brand-yellow transition-transform hover:scale-105 active:scale-95 shadow-2xl relative group-hover:scale-110"
            >
              <div className="absolute inset-0 rounded-full border-4 border-brand-yellow animate-ping opacity-20"></div>
              <Play className="w-10 h-10 fill-black text-black ml-1" />
            </button>
          </div>
        )}

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 container mx-auto z-10 pointer-events-none">
          <div className="max-w-4xl pointer-events-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1.5 bg-brand-yellow text-black text-xs font-bold rounded-full uppercase tracking-widest">
                Motivational Journey
              </span>
              <span className="text-muted text-sm font-bold">12 min read</span>
            </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
                {storyTitle}
              </h1>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <Link href={`/athletes/${id}`} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100">
                    <img src="https://i.pravatar.cc/150" alt="Author" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{exclusiveMatch ? "Wesley" : "Marcus Stone"}</div>
                    <div className="text-sm text-brand-yellow">NLA Official</div>
                  </div>
                </Link>

                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur border border-gray-100 flex items-center justify-center hover:bg-surface transition-colors text-gray-900">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur border border-gray-100 flex items-center justify-center hover:bg-surface transition-colors text-gray-900">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 mt-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Story Text */}
          <div className="lg:col-span-8 space-y-8 text-lg text-gray-600 leading-relaxed font-medium">
            {exclusiveMatch ? (
              <p className="text-xl text-gray-900 font-bold leading-relaxed border-l-4 border-brand-yellow pl-6">
                {exclusiveMatch.description}
              </p>
            ) : (
              <>
                <p className="text-xl text-gray-900 font-bold leading-relaxed">
                  Wrestling isn't just a sport; it's a life lesson. The moment you step on that mat, you realize it's just you and your opponent. No excuses, no one else to blame.
                </p>
                
                <p>
                  My journey started when I was seven. I was the smallest kid in my class, but I had a fire that no one could put out. I remember my first match vividly – I got pinned in under 30 seconds. Most kids would have quit right there, but something clicked in my head. I wanted to understand why I lost and how I could get better.
                </p>

                <h2 className="text-2xl font-black text-gray-900 mt-12 mb-6">The Devastating Setback</h2>
                
                <p>
                  Sophomore year was supposed to be my breakout season. I had trained all summer, attended every camp, and was in the best shape of my life. During a routine practice match in November, I felt a pop in my right knee. A torn ACL and meniscus. Season over.
                </p>

                <div className="my-10 p-8 border-l-4 border-brand-yellow bg-surface/50 rounded-r-2xl">
                  <p className="text-xl font-bold text-gray-900 italic">
                    "The doctor told me I might never wrestle at the same level again. That was the fuel I needed."
                  </p>
                </div>

                <p>
                  Rehab was brutal. Hours of physical therapy, crying in pain just trying to bend my knee past 90 degrees. But every time I wanted to give up, I pictured the state championship podium. I watched film every single day. I studied my opponents. I visualized my return.
                </p>

                <h2 className="text-2xl font-black text-gray-900 mt-12 mb-6">The Comeback</h2>
                
                <p>
                  Junior year. First match back. I was terrified. But the moment the whistle blew, muscle memory took over. I won by tech fall. That season, I went 45-6 and made it to the state tournament. I didn't win it all that year, but stepping onto that mat at the state center was my personal victory. 
                </p>
                <p>
                  Now, as a senior, I'm heading back. And this time, I'm not leaving without a medal.
                </p>
              </>
            )}
          </div>

          {/* Sidebar / Engagement */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-surface border border-gray-100 rounded-3xl p-6 sticky top-24">
              <h3 className="font-bold text-xl mb-6">Engagement</h3>
              
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <button className="w-12 h-12 rounded-full bg-surface-hover flex items-center justify-center hover:bg-zinc-800 transition-colors text-muted">
                      <Heart className="w-6 h-6" />
                    </button>
                    <span className="text-sm font-bold">1.2k</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <button className="w-12 h-12 rounded-full bg-surface-hover flex items-center justify-center hover:bg-zinc-800 transition-colors text-muted">
                      <MessageCircle className="w-6 h-6" />
                    </button>
                    <span className="text-sm font-bold">84</span>
                  </div>
                </div>
              </div>

              {/* Comments Section (Read-only for Guest) */}
              <div className="space-y-6 mb-8">
                <h4 className="font-bold text-sm text-brand-yellow uppercase tracking-wider">Top Comments</h4>
                
                <div className="space-y-4">
                  <div className="bg-surface-hover rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-700 overflow-hidden">
                        <img src="https://i.pravatar.cc/50?u=1" alt="User" />
                      </div>
                      <span className="text-xs font-bold">Coach Davis</span>
                    </div>
                    <p className="text-sm text-gray-600">Incredible resilience, Marcus. Keep pushing!</p>
                  </div>
                  <div className="bg-surface-hover rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-700 overflow-hidden">
                        <img src="https://i.pravatar.cc/50?u=2" alt="User" />
                      </div>
                      <span className="text-xs font-bold">Alex J.</span>
                    </div>
                    <p className="text-sm text-gray-600">This gave me chills. Good luck at state!</p>
                  </div>
                </div>
              </div>

              {/* Login CTA */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
                <h4 className="font-bold mb-2">Join the Conversation</h4>
                <p className="text-xs text-muted mb-4">Log in to like, save, and comment on this story.</p>
                <Link href="/login" className="block w-full py-3 bg-brand-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-colors text-sm shadow-sm">
                  Log in to Engage
                </Link>
                <Link href="/register" className="block w-full py-3 mt-2 text-gray-900 font-bold rounded-xl hover:bg-surface-hover transition-colors text-sm">
                  Create an Account
                </Link>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
