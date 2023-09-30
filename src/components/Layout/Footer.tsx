import React from "react";
import { Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="h-14 flex flex-row justify-around items-center text-lg">
      <a
        {...{
          target: "_blank",
        }}
        className="flex items-center font-semibold"
        href="https://itheum.com">
        Made with <Heart className="mx-1" /> by Itheum
      </a>
    </footer>
  );
};
