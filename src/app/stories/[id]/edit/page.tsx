import Link from "next/link";
import { ArrowLeft, Save, Upload } from "lucide-react";

export default async function EditStory({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 py-12 bg-background min-h-screen">
      <div className="w-full max-w-3xl bg-surface border-x border-surface-hover p-8 md:p-12 md:rounded-3xl shadow-2xl">
        
        <div className="flex items-center gap-4 mb-8">
          <Link href="/dashboard/stories" className="w-10 h-10 rounded-full bg-surface-hover hover:bg-zinc-800 flex items-center justify-center transition-colors border border-surface-hover">
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>
          <div>
            <h1 className="text-3xl font-black text-white tracking-tight">Edit Story</h1>
            <p className="text-muted text-sm">Update your draft or resubmit a rejected story.</p>
          </div>
        </div>

        <form className="space-y-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4 text-brand-yellow">Basic Info</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-white mb-2">Story Title</label>
                <input 
                  type="text" 
                  defaultValue="The Road to State: Overcoming the Impossible"
                  className="w-full px-4 py-3.5 bg-surface-hover border border-surface-hover rounded-xl text-white placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow focus:border-brand-yellow transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">Category</label>
                <select className="w-full px-4 py-3.5 bg-surface-hover border border-surface-hover rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-yellow transition-all appearance-none">
                  <option value="wrestling" selected>Wrestling</option>
                  <option value="athletics">Athletics</option>
                  <option value="personal">Personal Growth</option>
                </select>
              </div>
            </div>
          </div>

          <hr className="border-surface-hover" />

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4 text-brand-yellow">Content</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-white mb-2">What was your biggest challenge?</label>
                <textarea 
                  rows={4}
                  defaultValue="Sophomore year was supposed to be my breakout season. I had trained all summer, attended every camp..."
                  className="w-full px-4 py-3.5 bg-surface-hover border border-surface-hover rounded-xl text-white placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow focus:border-brand-yellow transition-all resize-y font-mono text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">What kept you motivated?</label>
                <textarea 
                  rows={3}
                  defaultValue="The doctor told me I might never wrestle at the same level again. That was the fuel I needed."
                  className="w-full px-4 py-3.5 bg-surface-hover border border-surface-hover rounded-xl text-white placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow focus:border-brand-yellow transition-all resize-y font-mono text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">The Achievement</label>
                <textarea 
                  rows={3}
                  defaultValue="Junior year. First match back. I was terrified. But the moment the whistle blew, muscle memory took over."
                  className="w-full px-4 py-3.5 bg-surface-hover border border-surface-hover rounded-xl text-white placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow focus:border-brand-yellow transition-all resize-y font-mono text-sm"
                />
              </div>
            </div>
          </div>

          <hr className="border-surface-hover" />

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4 text-brand-yellow">Media</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-white mb-2">YouTube Video Link</label>
                <input 
                  type="url" 
                  defaultValue="https://youtube.com/watch?v=dummy"
                  className="w-full px-4 py-3.5 bg-surface-hover border border-surface-hover rounded-xl text-white placeholder-muted focus:outline-none focus:ring-1 focus:ring-brand-yellow focus:border-brand-yellow transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2">Cover Image</label>
                <div className="flex items-start gap-6">
                  <div className="w-48 h-32 bg-surface-hover rounded-xl overflow-hidden border border-surface-hover shrink-0 relative group">
                    <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop" alt="Current Cover" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <Upload className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <button type="button" className="flex items-center gap-2 px-4 py-2 bg-surface-hover border border-surface-hover rounded-xl hover:bg-zinc-800 transition-colors font-bold text-sm mb-2">
                      <Upload className="w-4 h-4" /> Replace Image
                    </button>
                    <p className="text-xs text-muted">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 mt-8 border-t border-surface-hover justify-end">
            <Link href="/dashboard/stories" className="px-8 py-3.5 bg-surface-hover text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors border border-surface-hover text-center">
              Cancel
            </Link>
            <button type="submit" className="flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-yellow text-black font-bold rounded-xl hover:bg-yellow-400 transition-colors">
              <Save className="w-5 h-5" /> Save Changes
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
