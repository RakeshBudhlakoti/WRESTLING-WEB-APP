"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, LogOut, Edit, MapPin, Phone, Star, Play, Heart } from "lucide-react";
import StoryCard from "@/components/StoryCard";

export default function Profile() {
  const [activeTab, setActiveTab] = useState<'about' | 'stories' | 'testimonials'>('about');

  return (
    <div className="flex-1 bg-background text-gray-900 pb-20 relative">
      <div className="absolute top-0 left-0 w-full h-64 overflow-hidden z-0">
        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2500&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 blur-sm mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>
      <div className="container mx-auto px-4 mt-12 max-w-5xl relative z-10">
        
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start w-full">
            <div className="w-40 h-40 rounded-3xl bg-white overflow-hidden shrink-0 shadow-md">
              {/* Avatar placeholder */}
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=300&auto=format&fit=crop')] bg-cover bg-center"></div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-black tracking-tight mb-2">Marcus Stone</h1>
              <h2 className="text-sm font-bold text-gray-900 tracking-widest uppercase mb-4">
                Varsity Heavyweight • 2x State Qualifier
              </h2>
              <div className="flex justify-center md:justify-start gap-3">
                <SocialIcon icon={
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                } />
                <SocialIcon icon={
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                } />
                <SocialIcon icon={
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                } />
                <SocialIcon icon={<Mail className="w-4 h-4" />} />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-3 w-full md:w-auto shrink-0 mt-4 md:mt-0">
            <button className="px-6 py-2.5 bg-brand-red text-white font-bold rounded-xl hover:bg-red-600 transition-colors shadow-sm">
              Connect with Marcus
            </button>
            <Link href="/profile/edit" className="flex items-center gap-2 px-6 py-2.5 bg-surface border border-gray-100 text-gray-900 font-bold rounded-xl hover:bg-surface-hover transition-colors">
              <Edit className="w-4 h-4" /> Edit Profile
            </Link>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-surface border border-gray-100 text-red-500 font-bold rounded-xl hover:bg-surface-hover transition-colors">
              <LogOut className="w-4 h-4" /> Log Out
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-gray-100 mb-8 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('about')}
            className={`font-bold text-sm uppercase tracking-wider pb-4 border-b-2 whitespace-nowrap transition-colors ${activeTab === 'about' ? 'text-brand-blue border-brand-blue' : 'text-muted border-transparent hover:text-gray-900'}`}
          >
            About Me
          </button>
          <button 
            onClick={() => setActiveTab('stories')}
            className={`font-bold text-sm uppercase tracking-wider pb-4 border-b-2 whitespace-nowrap transition-colors ${activeTab === 'stories' ? 'text-brand-blue border-brand-blue' : 'text-muted border-transparent hover:text-gray-900'}`}
          >
            My Stories
          </button>
          <button 
            onClick={() => setActiveTab('testimonials')}
            className={`font-bold text-sm uppercase tracking-wider pb-4 border-b-2 whitespace-nowrap transition-colors ${activeTab === 'testimonials' ? 'text-brand-blue border-brand-blue' : 'text-muted border-transparent hover:text-gray-900'}`}
          >
            Testimonials
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {activeTab === 'about' && (
              <div className="bg-surface border border-gray-100 rounded-2xl p-8 space-y-8">
                <section>
                  <h3 className="text-brand-blue font-bold uppercase tracking-wider mb-4">My Journey</h3>
                  <div className="space-y-4 text-muted text-sm leading-relaxed">
                    <p>
                      I started wrestling at the age of 7, inspired by the discipline and mental toughness the sport requires. Over the last decade, I've learned that the mat is where character is built.
                    </p>
                    <p>
                      After a devastating knee injury in my sophomore year, I spent 12 months in rehab, coming back stronger to secure my second state qualification.
                    </p>
                    <p>
                      My goal is to compete at the collegiate level and eventually coach the next generation of NLA wrestlers.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-brand-blue font-bold uppercase tracking-wider mb-4">Key Achievements</h3>
                  <ul className="space-y-2 font-bold text-sm">
                    <li className="flex items-center gap-2"><span className="text-brand-yellow">🥇</span> 2023 Regional Champion (Heavyweight)</li>
                    <li className="flex items-center gap-2"><span className="text-brand-yellow">🥇</span> 2022 Most Improved Athlete</li>
                    <li className="flex items-center gap-2"><span className="text-brand-yellow">🥇</span> 45-6 Career Record</li>
                  </ul>
                </section>
              </div>
            )}

            {activeTab === 'stories' && (
              <div className="space-y-6">
                <h3 className="text-brand-yellow font-bold uppercase tracking-wider mb-4">My Stories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <StoryCard index={1} />
                  <StoryCard index={2} />
                </div>
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div className="space-y-6">
                <h3 className="text-brand-yellow font-bold uppercase tracking-wider mb-4">What Others Say</h3>
                <div className="space-y-4">
                  {/* Testimonial 1 */}
                  <div className="bg-surface border border-gray-100 rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-hover">
                        <img src="https://i.pravatar.cc/100?u=coach" alt="Coach Avatar" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Coach Richards</h4>
                        <div className="flex text-brand-yellow mt-1">
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed italic border-l-2 border-brand-yellow pl-4">
                      "Marcus is one of the most disciplined athletes I've ever coached. His return from injury showed the true elite mindset required for this sport. He leads by example every single day."
                    </p>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="bg-surface border border-gray-100 rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-hover">
                        <img src="https://i.pravatar.cc/100?u=jake" alt="Teammate Avatar" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Jake Thompson</h4>
                        <div className="flex text-brand-yellow mt-1">
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 text-muted" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed italic border-l-2 border-brand-yellow pl-4">
                      "Incredible story, Marcus. Your journey really inspired my junior varsity team during the tough mid-season grind. We constantly reference your comeback when things get hard."
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-surface border border-gray-100 rounded-2xl p-8 sticky top-8">
              <h3 className="text-brand-yellow font-bold uppercase tracking-wider mb-4">Contact for Inquiries</h3>
              <p className="text-muted text-sm mb-6">
                For professional inquiries, sponsorship opportunities, or coaching requests.
              </p>
              
              <div className="space-y-4 mb-8 text-sm font-bold">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-muted" /> m.stone@nlawrestling.com
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted" /> +1 (555) 012-3456
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted" /> Chicago, IL
                </div>
              </div>

              <button className="w-full py-3 bg-surface-hover rounded-xl hover:bg-zinc-800 transition-colors font-bold text-gray-900 border border-gray-100">
                Direct Message
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-10 h-10 rounded-full bg-surface-hover border border-surface flex items-center justify-center text-muted hover:text-gray-900 hover:bg-zinc-800 transition-colors">
      {icon}
    </button>
  );
}
