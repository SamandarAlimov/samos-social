import { SocialLayout } from "@/components/layout/SocialLayout";
import { VideoPlayer } from "@/components/social/VideoPlayer";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const mockVideos = [
  {
    src: "/api/placeholder/video/640/360",
    poster: "/api/placeholder/640/360",
    title: "Building Modern Web Applications with SAMOS",
    user: {
      name: "SAMOS Academy",
      username: "samosacademy",
      avatar: "/api/placeholder/40/40"
    }
  },
  {
    src: "/api/placeholder/video/640/360",
    poster: "/api/placeholder/640/360",
    title: "10 Tips for Better UI/UX Design",
    user: {
      name: "Design Pro",
      username: "designpro",
      avatar: "/api/placeholder/40/40"
    }
  },
  {
    src: "/api/placeholder/video/640/360",
    poster: "/api/placeholder/640/360",
    title: "The Future of Social Networking",
    user: {
      name: "Tech Insights",
      username: "techinsights",
      avatar: "/api/placeholder/40/40"
    }
  },
  {
    src: "/api/placeholder/video/640/360",
    poster: "/api/placeholder/640/360",
    title: "React Best Practices 2024",
    user: {
      name: "Code Master",
      username: "codemaster",
      avatar: "/api/placeholder/40/40"
    }
  },
  {
    src: "/api/placeholder/video/640/360",
    poster: "/api/placeholder/640/360",
    title: "SAMOS Platform Deep Dive",
    user: {
      name: "SAMOS Official",
      username: "samos",
      avatar: "/api/placeholder/40/40"
    }
  },
  {
    src: "/api/placeholder/video/640/360",
    poster: "/api/placeholder/640/360",
    title: "Building Responsive Layouts",
    user: {
      name: "Frontend Focus",
      username: "frontendfocus",
      avatar: "/api/placeholder/40/40"
    }
  }
];

const Videos = () => {
  return (
    <SocialLayout>
      <div className="p-6 pt-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Videos</h1>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search videos..."
                className="pl-10 bg-muted/50 border-none focus:bg-background"
              />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </Button>
          </div>
        </div>

        {/* Video Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {['All', 'Tech', 'Design', 'Tutorials', 'SAMOS', 'Programming', 'Innovation'].map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
                className={category === 'All' ? 'bg-primary hover:bg-primary-hover' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockVideos.map((video, index) => (
            <div key={index} className="animate-fade-in">
              <VideoPlayer {...video} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <Button variant="outline" className="px-8">
            Load More Videos
          </Button>
        </div>
      </div>
    </SocialLayout>
  );
};

export default Videos;