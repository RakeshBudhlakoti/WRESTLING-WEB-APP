"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, Heart, MessageCircle } from "lucide-react";

export default function StoryCard({ index }: { index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const isVideo = index % 2 === 0;
  const youtubeId = "dQw4w9WgXcQ"; // Dummy youtube ID
  
  const thumbnails = [
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop"
  ];
  const thumb = isVideo ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : thumbnails[index % thumbnails.length];
  
  return (
    <div className="bg-surface rounded-2xl overflow-hidden group flex flex-col h-full shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <Link href={`/stories/${index}`} className="relative h-48 w-full shrink-0 block overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60 z-10"></div>
        <img src={thumb} alt="Story thumbnail" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors shadow-sm pointer-events-auto">
              <Play className="w-5 h-5 fill-current ml-1 text-gray-900 group-hover:text-white" />
            </div>
          </div>
        )}
      </Link>
      
      <div className="p-5 flex flex-col flex-1">
        <span className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${index % 3 === 0 ? 'text-[#DD2A7B]' : index % 2 === 0 ? 'text-gradient-insta' : 'text-[#F58529]'}`}>
          {index % 3 === 0 ? 'MOTIVATIONAL JOURNEY' : index % 2 === 0 ? 'ATHLETE SUCCESS' : 'PERSONAL EXPERIENCE'}
        </span>
        
        <Link href={`/stories/${index}`} className="block text-gray-900 font-bold leading-tight mb-2 hover:text-brand-blue transition-colors text-lg">
          {index % 2 === 0 ? 'BEYOND THE BELL: Track Season 2024' : 'The Road to State: Overcoming the Impossible'}
        </Link>
        
        <p className="text-muted text-xs line-clamp-2 mb-4 leading-relaxed">
          Wrestling isn't just a sport; it's a life lesson. Watch how one athlete overcame a devastating injury to reach the finals.
        </p>
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <Link href={`/athletes/${index}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className={`w-6 h-6 rounded-full ${index % 3 === 0 ? 'bg-brand-blue' : index % 2 === 0 ? 'bg-brand-red' : 'bg-brand-yellow'}`}></div>
            <span className="text-xs font-bold text-gray-900">Marcus Stone</span>
          </Link>
          <div className="flex items-center gap-3 text-muted text-xs">
            <button className="flex items-center gap-1 hover:text-brand-red transition-colors font-bold">
              <Heart className="w-3.5 h-3.5" /> {1.2 + (index * 0.1)}k
            </button>
            <Link href={`/stories/${index}`} className="flex items-center gap-1 hover:text-brand-blue transition-colors font-bold">
              <MessageCircle className="w-3.5 h-3.5" /> 84
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
