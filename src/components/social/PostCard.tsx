import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PostCardProps {
  user: {
    name: string;
    username: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
  image?: string;
  video?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  liked?: boolean;
}

export const PostCard = ({ user, content, image, video, timestamp, likes, comments, shares, liked = false }: PostCardProps) => {
  return (
    <Card className="bg-gradient-post shadow-soft hover:shadow-medium transition-shadow duration-300 border-border/50">
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-sm">{user.name}</span>
                {user.verified && (
                  <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>@{user.username}</span>
                <span>•</span>
                <span>{timestamp}</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="mb-3">
          <p className="text-sm leading-relaxed">{content}</p>
        </div>

        {/* Media */}
        {image && (
          <div className="mb-3 rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt="Post content" 
              className="w-full h-auto object-cover max-h-96"
            />
          </div>
        )}

        {video && (
          <div className="mb-3 rounded-lg overflow-hidden bg-black aspect-video">
            <video 
              src={video} 
              controls 
              className="w-full h-full object-cover"
              poster="/api/placeholder/640/360"
            />
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center space-x-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`flex items-center space-x-1 hover:text-like ${liked ? 'text-like' : 'text-muted-foreground'}`}
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
              <span className="text-xs">{likes}</span>
            </Button>

            <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-muted-foreground hover:text-comment">
              <MessageCircle className="w-4 h-4" />
              <span className="text-xs">{comments}</span>
            </Button>

            <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-muted-foreground hover:text-share">
              <Share className="w-4 h-4" />
              <span className="text-xs">{shares}</span>
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-accent">
            <Bookmark className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};