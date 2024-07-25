"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";

interface CategoriesProps {
  className?: string;
}

const categories = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "c" },
  { id: 4, name: "d" },
  { id: 5, name: "e" },
  { id: 6, name: "f" },
];

export const Categories: React.FC<CategoriesProps> = ({ className }) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categories.map((category, idx) => (
        <a
          href={`/#${category.name}`}
          className={cn(
            "flex items-center font-bolt h-11 rounded-2xl px-5",
            activeCategoryId === category.id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={category.id}
        >
          <button>{category.name}</button>
        </a>
      ))}
    </div>
  );
};
