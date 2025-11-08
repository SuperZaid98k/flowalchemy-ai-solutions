import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import ChatInterface from "./ChatInterface";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-24 right-8 z-50 animate-fade-in">
        <Button
          size="lg"
          variant="hero"
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 shadow-glow hover:scale-110 transition-transform duration-300"
        >
          <MessageCircle className="w-7 h-7 icon-glow" />
        </Button>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping" />
      </div>
      
      {isOpen && <ChatInterface onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatButton;
