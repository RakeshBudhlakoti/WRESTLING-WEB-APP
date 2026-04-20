import Link from "next/link";
import { PlusCircle, Edit, FileText, Heart, Activity } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex-1 bg-background text-white pb-20">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Welcome back, Marcus!</h1>
          <p className="text-muted">Here's what's happening with your profile today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Stats Cards */}
          <div className="bg-surface border border-surface-hover rounded-2xl p-6 flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-surface-hover flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-brand-yellow" />
            </div>
            <div className="text-3xl font-black mb-1">12</div>
            <div className="text-sm font-bold text-muted uppercase tracking-wider">Total Stories</div>
          </div>
          
          <div className="bg-surface border border-surface-hover rounded-2xl p-6 flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-surface-hover flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-brand-yellow" />
            </div>
            <div className="text-3xl font-black mb-1">14.2k</div>
            <div className="text-sm font-bold text-muted uppercase tracking-wider">Likes Received</div>
          </div>
          
          <div className="bg-surface border border-surface-hover rounded-2xl p-6 flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-surface-hover flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-brand-yellow" />
            </div>
            <div className="text-3xl font-black mb-1">89%</div>
            <div className="text-sm font-bold text-muted uppercase tracking-wider">Engagement Rate</div>
          </div>
        </div>

        {/* Quick Actions */}
        <h2 className="text-2xl font-bold mb-6 tracking-tight">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Link href="/submit" className="flex flex-col items-center justify-center gap-3 p-6 bg-brand-yellow text-black rounded-2xl hover:bg-yellow-400 transition-transform hover:scale-105">
            <PlusCircle className="w-8 h-8" />
            <span className="font-bold">Create Story</span>
          </Link>
          <Link href="/profile/edit" className="flex flex-col items-center justify-center gap-3 p-6 bg-surface border border-surface-hover rounded-2xl hover:bg-surface-hover transition-transform hover:scale-105">
            <Edit className="w-8 h-8 text-white" />
            <span className="font-bold">Edit Profile</span>
          </Link>
          <Link href="/dashboard/stories" className="flex flex-col items-center justify-center gap-3 p-6 bg-surface border border-surface-hover rounded-2xl hover:bg-surface-hover transition-transform hover:scale-105">
            <FileText className="w-8 h-8 text-white" />
            <span className="font-bold">My Stories</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center justify-center gap-3 p-6 bg-[#1C1C1C] border border-[#333333] rounded-2xl hover:bg-zinc-800 transition-transform hover:scale-105">
            <Activity className="w-8 h-8 text-muted" />
            <span className="font-bold text-muted">View Public Profile</span>
          </Link>
        </div>

        {/* Recent Activity (Optional but good UX) */}
        <h2 className="text-2xl font-bold mb-6 tracking-tight">Recent Activity</h2>
        <div className="bg-surface border border-surface-hover rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-surface-hover flex items-center justify-between hover:bg-surface-hover transition-colors">
            <div>
              <div className="font-bold mb-1">Story Approved: "The Road to State"</div>
              <div className="text-xs text-muted">2 hours ago</div>
            </div>
            <Link href="/stories/1" className="text-brand-yellow text-sm font-bold">View</Link>
          </div>
          <div className="p-4 border-b border-surface-hover flex items-center justify-between hover:bg-surface-hover transition-colors">
            <div>
              <div className="font-bold mb-1">New Milestone: 10,000 Likes!</div>
              <div className="text-xs text-muted">1 day ago</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
