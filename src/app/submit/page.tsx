"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, ChevronLeft, Upload, Play } from "lucide-react";

export default function SubmitStory() {
  const [step, setStep] = useState(1);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const totalSteps = 4;

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  
  const videoId = getYoutubeId(youtubeUrl);
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop";

  const handleNext = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex-1 bg-background text-white pb-20">
      <div className="container mx-auto px-4 mt-12 max-w-3xl">
        
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Share Your Journey</h1>
          <p className="text-muted">Inspire the community with your story. Your submission will be reviewed by our admin team before publishing.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-surface-hover z-0"></div>
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-yellow z-0 transition-all duration-300"
            style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
          ></div>
          
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
              step >= i ? 'bg-brand-yellow text-black shadow-[0_0_15px_rgba(255,221,0,0.3)]' : 'bg-surface border-2 border-surface-hover text-muted'
            }`}>
              {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-surface border border-surface-hover rounded-3xl p-6 md:p-10 min-h-[400px] flex flex-col">
          
          <div className="flex-1">
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-2xl font-bold mb-6">Step 1: Basic Info</h2>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Story Title</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-surface-hover border border-surface-hover rounded-xl text-white placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow transition-all"
                    placeholder="e.g. My Road to Victory"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Category</label>
                  <select className="w-full px-4 py-3 bg-surface-hover border border-surface-hover rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-yellow transition-all appearance-none">
                    <option value="" disabled selected>Select a category</option>
                    <option value="wrestling">Wrestling</option>
                    <option value="athletics">Athletics</option>
                    <option value="personal">Personal Growth</option>
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-2xl font-bold mb-6">Step 2: The Story</h2>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">What was your biggest challenge?</label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-3 bg-surface-hover border border-surface-hover rounded-xl text-white placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow transition-all resize-y"
                    placeholder="Describe the obstacles you faced..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">What kept you motivated?</label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-3 bg-surface-hover border border-surface-hover rounded-xl text-white placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow transition-all resize-y"
                    placeholder="Who or what pushed you forward?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">The Achievement</label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-3 bg-surface-hover border border-surface-hover rounded-xl text-white placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow transition-all resize-y"
                    placeholder="Describe the moment of success..."
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-2xl font-bold mb-6">Step 3: Media Upload</h2>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">YouTube Video Link (Optional)</label>
                  <input 
                    type="url" 
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    className="w-full px-4 py-3 bg-surface-hover border border-surface-hover rounded-xl text-white placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow transition-all"
                    placeholder="https://youtube.com/watch?v=..."
                  />
                  {videoId && (
                    <p className="text-xs text-brand-yellow mt-2 font-bold">✓ Valid YouTube link detected</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Upload High-Res Cover Image</label>
                  <div className="border-2 border-dashed border-surface-hover rounded-2xl p-8 text-center hover:bg-surface-hover/50 transition-colors cursor-pointer">
                    <div className="w-16 h-16 bg-surface border border-surface-hover rounded-full flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-6 h-6 text-brand-yellow" />
                    </div>
                    <h3 className="font-bold mb-1">Click to upload</h3>
                    <p className="text-xs text-muted">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-2xl font-bold mb-6">Step 4: Preview & Submit</h2>
                <div className="bg-surface-hover rounded-2xl p-6 border border-surface-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-brand-yellow text-black text-xs font-bold rounded-full uppercase">Wrestling</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">My Road to Victory</h3>
                  <div className="aspect-video bg-surface rounded-xl mb-6 overflow-hidden relative">
                    <img src={thumbnailUrl} alt="Preview" className="w-full h-full object-cover opacity-80" />
                    {videoId && (
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="w-16 h-16 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10">
                          <Play className="w-8 h-8 fill-brand-yellow text-brand-yellow ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-zinc-300 line-clamp-3">
                    Wrestling isn't just a sport; it's a life lesson. The moment you step on that mat...
                  </p>
                </div>
                
                <div className="bg-[#1C1C1C] border border-[#333333] rounded-xl p-4 text-sm text-muted">
                  <span className="text-brand-yellow font-bold">Note:</span> By submitting, you agree to our content guidelines. Your story will be reviewed by an admin before becoming public.
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-surface-hover">
            {step > 1 ? (
              <button 
                onClick={handlePrev}
                className="flex items-center gap-2 px-6 py-3 bg-surface hover:bg-surface-hover text-white font-bold rounded-xl transition-colors border border-surface-hover"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
            ) : (
              <Link 
                href="/dashboard"
                className="px-6 py-3 text-muted hover:text-white font-bold transition-colors"
              >
                Cancel
              </Link>
            )}

            {step < totalSteps ? (
              <button 
                onClick={handleNext}
                className="flex items-center gap-2 px-8 py-3 bg-brand-yellow text-black font-bold rounded-xl hover:bg-yellow-400 transition-colors"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <Link 
                href="/dashboard/stories"
                className="flex items-center gap-2 px-8 py-3 bg-brand-yellow text-black font-bold rounded-xl hover:bg-yellow-400 transition-colors"
              >
                Submit Story
              </Link>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
