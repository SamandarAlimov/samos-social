import { useState } from "react";
import { Image, Video, Smile, Calendar } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export const CreatePost = () => {
  const [content, setContent] = useState("");

  return (
    <Card className="bg-gradient-post shadow-soft border-border/50 mb-6">
      <CardContent className="p-4">
        <div className="flex space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/api/placeholder/40/40" alt="Your avatar" />
            <AvatarFallback>SU</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <Textarea
              placeholder="What's happening on SAMOS?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[100px] border-none resize-none bg-transparent placeholder:text-muted-foreground focus:ring-0"
            />
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="w-8 h-8 text-primary hover:text-primary-hover">
                  <Image className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 text-accent hover:text-accent-hover">
                  <Video className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-foreground">
                  <Smile className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-foreground">
                  <Calendar className="w-4 h-4" />
                </Button>
              </div>
              
              <Button 
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
                disabled={!content.trim()}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};