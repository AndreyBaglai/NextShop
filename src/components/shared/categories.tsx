import { cn } from "@/lib/utils";
import React from "react";

interface CategoriesProps {
  className?: string;
}

const categories = ["a", "b", "c", "d", "e", "f"];
const activeIndex = 0;

export const Categories: React.FC<CategoriesProps> = ({ className }) => {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categories.map((category, idx) => (
        <a
          className={cn(
            "flex items-center font-bolt h-11 rounded-2xl px-5",
            activeIndex === idx &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={idx}
        >
          <button>{category}</button>
        </a>
      ))}
    </div>
  );
};
