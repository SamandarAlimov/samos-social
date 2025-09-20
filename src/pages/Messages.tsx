import { useState } from "react";
import { Search, Phone, Video, MoreVertical, Send, Smile, Paperclip } from "lucide-react";
import { SocialLayout } from "@/components/layout/SocialLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mockChats = [
  {
    id: 1,
    user: { name: "Alex Johnson", username: "alexj", avatar: "/api/placeholder/40/40" },
    lastMessage: "Hey! How's the new project going?",
    timestamp: "2m",
    unread: 2,
    online: true
  },
  {
    id: 2,
    user: { name: "Sarah Chen", username: "sarahc", avatar: "/api/placeholder/40/40" },
    lastMessage: "Thanks for the recommendation!",
    timestamp: "1h",
    unread: 0,
    online: false
  },
  {
    id: 3,
    user: { name: "SAMOS Team", username: "samosofficial", avatar: "/api/placeholder/40/40" },
    lastMessage: "New update available 🚀",
    timestamp: "3h",
    unread: 1,
    online: true
  }
];

const mockMessages = [
  {
    id: 1,
    sender: "other",
    content: "Hey! How's the new project going?",
    timestamp: "2:30 PM",
    type: "text"
  },
  {
    id: 2,
    sender: "me",
    content: "Going great! Just finished the UI mockups. Want to see?",
    timestamp: "2:32 PM",
    type: "text"
  },
  {
    id: 3,
    sender: "me",
    content: "/api/placeholder/300/200",
    timestamp: "2:32 PM",
    type: "image"
  },
  {
    id: 4,
    sender: "other",
    content: "Wow, that looks amazing! Love the color scheme 🎨",
    timestamp: "2:35 PM",
    type: "text"
  }
];

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(mockChats[0]);
  const [newMessage, setNewMessage] = useState("");

  return (
    <SocialLayout>
      <div className="h-[calc(100vh-4rem)] flex">
        {/* Chat List */}
        <div className="w-80 border-r border-border bg-card">
          <div className="p-4 border-b border-border">
            <h2 className="text-xl font-bold mb-3">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </div>
          
          <div className="overflow-y-auto">
            {mockChats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className={`p-4 border-b border-border cursor-pointer hover:bg-muted/50 transition-colors ${
                  selectedChat.id === chat.id ? 'bg-primary/10' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={chat.user.avatar} alt={chat.user.name} />
                      <AvatarFallback>{chat.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {chat.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-online border-2 border-card rounded-full"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-sm truncate">{chat.user.name}</h3>
                      <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                  </div>
                  
                  {chat.unread > 0 && (
                    <div className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">
                      {chat.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-border bg-card flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={selectedChat.user.avatar} alt={selectedChat.user.name} />
                <AvatarFallback>{selectedChat.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{selectedChat.user.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {selectedChat.online ? 'Active now' : 'Last seen 1h ago'}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Phone className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {mockMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-sm px-4 py-2 rounded-2xl ${
                    message.sender === 'me'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  {message.type === 'text' ? (
                    <p className="text-sm">{message.content}</p>
                  ) : (
                    <img 
                      src={message.content} 
                      alt="Shared image" 
                      className="rounded-lg max-w-full h-auto"
                    />
                  )}
                  <p className={`text-xs mt-1 ${
                    message.sender === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Paperclip className="w-5 h-5" />
              </Button>
              
              <div className="flex-1 relative">
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="pr-12"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                >
                  <Smile className="w-4 h-4" />
                </Button>
              </div>
              
              <Button 
                size="icon" 
                className="bg-primary hover:bg-primary-hover"
                disabled={!newMessage.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SocialLayout>
  );
};

export default Messages;