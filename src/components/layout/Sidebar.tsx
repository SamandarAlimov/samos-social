import { Home, Search, MessageCircle, Bell, User, Video, Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Explore", path: "/explore" },
  { icon: MessageCircle, label: "Messages", path: "/messages" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: Video, label: "Videos", path: "/videos" },
  { icon: Users, label: "Groups", path: "/groups" },
  { icon: User, label: "Profile", path: "/profile" },
];

export const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  return (
    <aside className={cn(
      "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-card border-r border-border transition-all duration-300 z-40",
      isOpen ? "w-64" : "w-16"
    )}>
      <div className="flex flex-col h-full">
        {/* Logo/Brand */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            {isOpen && (
              <span className="font-bold text-xl text-primary">SAMOS</span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2">
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors",
                    "hover:bg-muted text-muted-foreground hover:text-foreground",
                    isActive && "bg-primary/10 text-primary font-medium"
                  )
                }
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {isOpen && <span>{item.label}</span>}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Toggle Button */}
        <div className="p-2 border-t border-border">
          <button
            onClick={onToggle}
            className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <div className={cn(
              "w-1 h-1 bg-muted-foreground rounded-full transition-transform",
              !isOpen && "rotate-180"
            )} />
          </button>
        </div>
      </div>
    </aside>
  );
};