import { Camera, MapPin, Calendar, Link, MoreHorizontal } from "lucide-react";
import { SocialLayout } from "@/components/layout/SocialLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PostCard } from "@/components/social/PostCard";

const mockUserPosts = [
  {
    user: {
      name: "SAMOS User",
      username: "samosuser",
      avatar: "/api/placeholder/40/40",
      verified: false
    },
    content: "Just completed my first project using the SAMOS platform! The development experience is incredible. 🚀 #SAMOSDev #WebDev",
    image: "/api/placeholder/600/400",
    timestamp: "5h",
    likes: 45,
    comments: 8,
    shares: 3,
    liked: false
  },
  {
    user: {
      name: "SAMOS User",
      username: "samosuser",
      avatar: "/api/placeholder/40/40",
      verified: false
    },
    content: "Beautiful day for coding! Working on some exciting new features. What are you building today?",
    timestamp: "1d",
    likes: 23,
    comments: 5,
    shares: 1,
    liked: true
  }
];

const Profile = () => {
  return (
    <SocialLayout>
      <div className="max-w-4xl mx-auto">
        {/* Cover Photo */}
        <div className="relative h-48 md:h-64 bg-gradient-primary rounded-b-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
          >
            <Camera className="w-5 h-5" />
          </Button>
        </div>

        {/* Profile Info */}
        <div className="relative px-6 pb-6">
          {/* Avatar */}
          <div className="relative -mt-16 mb-4">
            <Avatar className="w-32 h-32 border-4 border-card shadow-large">
              <AvatarImage src="/api/placeholder/128/128" alt="Profile" />
              <AvatarFallback className="text-2xl">SU</AvatarFallback>
            </Avatar>
            <Button
              variant="ghost"
              size="icon"
              className="absolute bottom-2 right-2 w-8 h-8 bg-card border border-border hover:bg-muted"
            >
              <Camera className="w-4 h-4" />
            </Button>
          </div>

          {/* User Info */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-2xl font-bold">SAMOS User</h1>
                <Button variant="ghost" size="icon" className="w-6 h-6">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-muted-foreground mb-3">@samosuser</p>
              
              <p className="text-sm mb-3 max-w-md">
                Building amazing things with SAMOS platform 🚀 | Full-stack developer | 
                Tech enthusiast | Always learning something new
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Link className="w-4 h-4" />
                  <span className="text-primary">samos.uz</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined March 2024</span>
                </div>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary-hover">
              Edit Profile
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-6 mt-6 pt-6 border-t border-border">
            <div className="text-center">
              <p className="font-bold text-lg">1,234</p>
              <p className="text-sm text-muted-foreground">Posts</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">5,678</p>
              <p className="text-sm text-muted-foreground">Following</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">9,876</p>
              <p className="text-sm text-muted-foreground">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">432</p>
              <p className="text-sm text-muted-foreground">Likes</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-border mb-6">
          <div className="flex space-x-8 px-6">
            {['Posts', 'Photos', 'Videos', 'Likes'].map((tab) => (
              <button
                key={tab}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  tab === 'Posts'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Posts */}
        <div className="px-6 space-y-4">
          {mockUserPosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </SocialLayout>
  );
};

export default Profile;