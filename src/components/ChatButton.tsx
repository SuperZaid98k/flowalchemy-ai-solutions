import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

const ChatButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
      <Button
        size="lg"
        variant="hero"
        onClick={handleClick}
        className="rounded-full w-16 h-16 shadow-glow hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle className="w-7 h-7 icon-glow" />
      </Button>
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping" />
    </div>
  );
};

export default ChatButton;
