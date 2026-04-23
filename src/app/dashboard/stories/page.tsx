import Link from "next/link";
import { PlusCircle, Edit, Trash2, ArrowLeft, Eye } from "lucide-react";

export default function MyStories() {
  const stories = [
    { id: 1, title: "The Road to State: Overcoming the Impossible", category: "Wrestling", status: "approved", date: "Oct 12, 2024", views: "14.2k" },
    { id: 2, title: "Training Camp: A New Perspective", category: "Personal Growth", status: "pending", date: "Nov 05, 2024", views: "-" },
    { id: 3, title: "Nutrition for the Mat", category: "Wrestling", status: "draft", date: "Nov 10, 2024", views: "-" },
    { id: 4, title: "Why I Changed My Stance", category: "Wrestling", status: "rejected", date: "Sep 20, 2024", views: "-" },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'approved': return 'bg-green-500/20 text-green-500 border-green-500/30';
      case 'pending': return 'bg-brand-yellow/20 text-brand-yellow border-brand-yellow/30';
      case 'draft': return 'bg-surface-hover text-muted border-gray-100';
      case 'rejected': return 'bg-red-500/20 text-red-500 border-red-500/30';
      default: return 'bg-surface-hover text-muted';
    }
  };

  return (
    <div className="flex-1 bg-background text-gray-900 pb-20">
      <div className="container mx-auto px-4 mt-12 max-w-5xl">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="w-10 h-10 rounded-full bg-surface hover:bg-surface-hover flex items-center justify-center transition-colors border border-gray-100">
              <ArrowLeft className="w-5 h-5 text-gray-900" />
            </Link>
            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight">My Stories</h1>
              <p className="text-muted text-sm">Manage and track the status of your submissions.</p>
            </div>
          </div>
          <Link href="/submit" className="flex items-center gap-2 px-6 py-3 bg-brand-yellow text-black font-bold rounded-xl hover:bg-yellow-400 transition-colors w-fit">
            <PlusCircle className="w-5 h-5" /> Create New
          </Link>
        </div>

        {/* Stories List */}
        <div className="bg-surface border border-gray-100 rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-gray-100 text-sm font-bold text-muted uppercase tracking-wider">
            <div className="col-span-5">Story Details</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1">Views</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          {/* List */}
          <div className="divide-y divide-surface-hover">
            {stories.map((story) => (
              <div key={story.id} className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-surface-hover/30 transition-colors">
                
                {/* Mobile Label: Story Details */}
                <div className="col-span-5 flex items-start gap-4">
                  <div className="w-16 h-12 bg-surface-hover rounded-lg overflow-hidden shrink-0 hidden sm:block">
                    <img src={`https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=200&auto=format&fit=crop`} alt="Thumbnail" className="w-full h-full object-cover opacity-60" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight mb-1">{story.title}</h3>
                    <span className="text-xs text-muted font-bold uppercase">{story.category}</span>
                  </div>
                </div>

                <div className="col-span-2 text-sm text-muted">
                  <span className="md:hidden font-bold mr-2">Date:</span>{story.date}
                </div>

                <div className="col-span-2">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border capitalize ${getStatusColor(story.status)}`}>
                    {story.status}
                  </span>
                  {story.status === 'rejected' && (
                    <p className="text-xs text-red-400 mt-1">Check notifications for reason</p>
                  )}
                </div>

                <div className="col-span-1 text-sm font-bold">
                  <span className="md:hidden font-bold text-muted mr-2">Views:</span>{story.views}
                </div>

                <div className="col-span-2 flex items-center justify-end gap-2">
                  {story.status === 'approved' ? (
                    <Link href={`/stories/${story.id}`} className="w-10 h-10 rounded-full bg-surface hover:bg-surface-hover border border-gray-100 flex items-center justify-center transition-colors text-gray-900" title="View Public">
                      <Eye className="w-4 h-4" />
                    </Link>
                  ) : null}
                  <Link href={`/stories/${story.id}/edit`} className="w-10 h-10 rounded-full bg-surface hover:bg-surface-hover border border-gray-100 flex items-center justify-center transition-colors text-gray-900" title="Edit">
                    <Edit className="w-4 h-4" />
                  </Link>
                  <button className="w-10 h-10 rounded-full bg-surface hover:bg-surface-hover border border-gray-100 flex items-center justify-center transition-colors text-red-500" title="Delete">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
