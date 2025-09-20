import { SocialLayout } from "@/components/layout/SocialLayout";
import { CreatePost } from "@/components/social/CreatePost";
import { PostCard } from "@/components/social/PostCard";
import { VideoPlayer } from "@/components/social/VideoPlayer";

const mockPosts = [
  {
    user: {
      name: "Alex Johnson",
      username: "alexj",
      avatar: "/api/placeholder/40/40",
      verified: true
    },
    content: "Just launched a new feature on SAMOS platform! 🚀 The future of social networking is here. #SAMOSSocial #Innovation",
    image: "/api/placeholder/600/400",
    timestamp: "2h",
    likes: 127,
    comments: 23,
    shares: 8,
    liked: true
  },
  {
    user: {
      name: "Sarah Chen",
      username: "sarahc",
      avatar: "/api/placeholder/40/40"
    },
    content: "Beautiful sunset from my office window today! Sometimes we need to pause and appreciate the small moments. What's making you smile today?",
    image: "/api/placeholder/600/400",
    timestamp: "4h",
    likes: 89,
    comments: 15,
    shares: 3
  },
  {
    user: {
      name: "SAMOS Tech",
      username: "samostech",
      avatar: "/api/placeholder/40/40",
      verified: true
    },
    content: "🎥 Check out our latest tutorial on building responsive web applications! Learn how to create stunning user interfaces with modern tools.",
    video: "/api/placeholder/video/640/360",
    timestamp: "6h",
    likes: 234,
    comments: 45,
    shares: 19,
    liked: false
  }
];

const mockVideos = [
  {
    src: "/api/placeholder/video/640/360",
    poster: "/api/placeholder/640/360",
    title: "Building the Future: SAMOS Platform Overview",
    user: {
      name: "SAMOS Official",
      username: "samos",
      avatar: "/api/placeholder/40/40"
    }
  }
];

const Index = () => {
  return (
    <SocialLayout>
      <div className="p-6 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            <CreatePost />
            
            <div className="space-y-4">
              {mockPosts.map((post, index) => (
                <div key={index} className="animate-fade-in">
                  <PostCard {...post} />
                </div>
              ))}
            </div>

            {/* Featured Video Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">Featured Videos</h2>
              {mockVideos.map((video, index) => (
                <VideoPlayer key={index} {...video} />
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <div className="bg-gradient-post rounded-lg p-4 shadow-soft border border-border/50">
              <h3 className="font-bold text-lg mb-4">Trending on SAMOS</h3>
              <div className="space-y-3">
                {[
                  { tag: "#SAMOSLaunch", posts: "12.5K posts" },
                  { tag: "#TechNews", posts: "8.2K posts" },
                  { tag: "#WebDev", posts: "5.7K posts" },
                  { tag: "#Innovation", posts: "4.1K posts" }
                ].map((trend, index) => (
                  <div key={index} className="cursor-pointer hover:bg-muted/50 p-2 rounded transition-colors">
                    <p className="font-medium text-primary text-sm">{trend.tag}</p>
                    <p className="text-xs text-muted-foreground">{trend.posts}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Users */}
            <div className="bg-gradient-post rounded-lg p-4 shadow-soft border border-border/50">
              <h3 className="font-bold text-lg mb-4">Who to follow</h3>
              <div className="space-y-3">
                {[
                  { name: "Maria Rodriguez", username: "mariar", avatar: "/api/placeholder/32/32" },
                  { name: "David Kim", username: "davidk", avatar: "/api/placeholder/32/32" },
                  { name: "Emily Wang", username: "emilyw", avatar: "/api/placeholder/32/32" }
                ].map((user, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="font-medium text-sm">{user.name}</p>
                        <p className="text-xs text-muted-foreground">@{user.username}</p>
                      </div>
                    </div>
                    <button className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium hover:bg-primary-hover transition-colors">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SocialLayout>
  );
};

export default Index;
