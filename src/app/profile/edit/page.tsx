import Link from "next/link";
import { LogOut, Image as ImageIcon, User, Share2, Video, Star, Trash2, Edit } from "lucide-react";

export default function EditProfile() {
  return (
    <div className="flex-1 bg-background text-gray-900 pb-20">
      <div className="container mx-auto px-4 mt-12 max-w-4xl">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">Edit Profile</h1>
          <button className="flex items-center gap-2 px-4 py-2 border border-red-500/30 text-red-500 rounded-full hover:bg-red-500/10 transition-colors text-sm font-bold">
            <LogOut className="w-4 h-4" /> Log Out
          </button>
        </div>

        <div className="space-y-8">
          
          {/* IMAGES */}
          <div className="bg-surface border border-gray-200 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <ImageIcon className="w-5 h-5 text-gray-900" />
              <h2 className="text-sm font-black uppercase tracking-wider text-gray-900">IMAGES</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold text-muted mb-3">Cover Picture Background</label>
                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-2 pr-4 mb-2">
                  <label className="cursor-pointer bg-brand-blue text-white font-bold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-xs shrink-0">
                    Choose file
                    <input type="file" className="hidden" accept="image/*" />
                  </label>
                  <span className="text-gray-900 text-xs truncate">No file chosen</span>
                </div>
                <p className="text-[10px] text-muted">Recommended size: 1920x400px. Overlays the top of your profile.</p>
              </div>
              <div>
                <label className="block text-xs font-bold text-muted mb-3">Profile Picture / Avatar</label>
                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-2 pr-4 mb-2">
                  <label className="cursor-pointer bg-brand-blue text-white font-bold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-xs shrink-0">
                    Choose file
                    <input type="file" className="hidden" accept="image/*" />
                  </label>
                  <span className="text-gray-900 text-xs truncate">No file chosen</span>
                </div>
                <p className="text-[10px] text-muted">Recommended size: 400x400px. Appears next to your name.</p>
              </div>
            </div>
          </div>

          {/* PERSONAL DETAILS & ABOUT ME */}
          <div className="bg-surface border border-gray-200 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-5 h-5 text-gray-900" />
              <h2 className="text-sm font-black uppercase tracking-wider text-gray-900">PERSONAL DETAILS & ABOUT ME</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold text-muted mb-2">Full Name</label>
                <input 
                  type="text" 
                  defaultValue="Marcus Stone"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted mb-2">Tagline / Title</label>
                <input 
                  type="text" 
                  defaultValue="Varsity Heavyweight • 2x State Qualifier"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow transition-all text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-muted mb-2">My Journey (Bio & About Me)</label>
              <textarea 
                rows={5}
                defaultValue="I started wrestling at the age of 7, inspired by the discipline and mental toughness the sport requires. Over the last decade, I've learned that the mat is where character is built. After a devastating knee injury in my sophomore year, I spent 12 months in rehab, coming back stronger to secure my second state qualification.&#10;&#10;My goal is to compete at the collegiate level and eventually coach the next generation of NLA wrestlers."
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow transition-all resize-y text-xs font-mono leading-relaxed"
              />
            </div>
          </div>

          {/* SOCIAL MEDIA & CONTACT */}
          <div className="bg-surface border border-gray-200 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Share2 className="w-5 h-5 text-brand-yellow" />
              <h2 className="text-sm font-black uppercase tracking-wider text-brand-yellow">SOCIAL MEDIA & CONTACT</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-muted mb-2">
                  <span className="text-brand-yellow">📸</span> Instagram Handle/URL
                </label>
                <input 
                  type="text" 
                  placeholder="@marcus_stone"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow transition-all text-sm"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-muted mb-2">
                  <span className="text-brand-yellow">🐦</span> Twitter Handle/URL
                </label>
                <input 
                  type="text" 
                  placeholder="@stone_wrestles"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow transition-all text-sm"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-muted mb-2">
                  <span className="text-brand-yellow">▶️</span> YouTube Channel URL
                </label>
                <input 
                  type="url" 
                  placeholder="https://youtube.com/..."
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow transition-all text-sm"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-muted mb-2">
                  <span className="text-brand-yellow">✉️</span> Public Email
                </label>
                <input 
                  type="email" 
                  defaultValue="m.stone@nlawrestling.com"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow transition-all text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Link href="/dashboard" className="px-8 py-3 bg-white border border-gray-200 text-gray-900 font-bold rounded-xl hover:bg-zinc-800 transition-colors text-sm">
              Cancel
            </Link>
            <button className="px-8 py-3 bg-brand-yellow text-black font-bold rounded-xl hover:bg-yellow-400 transition-colors text-sm">
              Save Profile Changes
            </button>
          </div>

          {/* MANAGE STORIES */}
          <div className="bg-surface border border-gray-200 rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-brand-yellow" />
                <h2 className="text-sm font-black uppercase tracking-wider text-brand-yellow">MANAGE STORIES</h2>
              </div>
              <Link href="/submit" className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-zinc-800 transition-colors text-xs font-bold">
                + Add Story
              </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
              <div>
                <h3 className="font-bold text-sm mb-1 text-gray-900">The Road to State: Overcoming the Impossible</h3>
                <p className="text-xs text-muted">Wrestling isn't just a sport; it's a life lesson...</p>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/stories/1/edit" className="w-8 h-8 rounded-md bg-blue-50 text-brand-blue flex items-center justify-center hover:bg-blue-100 transition-colors border border-brand-blue/30">
                  <Edit className="w-3.5 h-3.5" />
                </Link>
                <button className="w-8 h-8 rounded-md bg-red-500/10 text-red-500 flex items-center justify-center hover:bg-red-500/20 transition-colors border border-red-500/30">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* MANAGE TESTIMONIALS */}
          <div className="bg-surface border border-gray-200 rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-brand-yellow" />
                <h2 className="text-sm font-black uppercase tracking-wider text-brand-yellow">MANAGE TESTIMONIALS</h2>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-zinc-800 transition-colors text-xs font-bold">
                + Add Testimonial
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start justify-between gap-4 shadow-sm">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-sm text-gray-900">Coach Richards</h3>
                    <div className="flex text-brand-yellow">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    "Marcus is one of the most disciplined athletes I've ever coached. His return from injury showed the true elite mindset required for this sport."
                  </p>
                </div>
                <button className="w-8 h-8 rounded-md bg-red-500/10 text-red-500 flex items-center justify-center hover:bg-red-500/20 transition-colors border border-red-500/30 shrink-0">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start justify-between gap-4 shadow-sm">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-sm text-gray-900">Jake Thompson</h3>
                    <div className="flex text-brand-yellow">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 text-muted" />
                    </div>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    "Incredible story, Marcus. Your journey really inspired my junior varsity team during the tough mid-season grind."
                  </p>
                </div>
                <button className="w-8 h-8 rounded-md bg-red-500/10 text-red-500 flex items-center justify-center hover:bg-red-500/20 transition-colors border border-red-500/30 shrink-0">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
