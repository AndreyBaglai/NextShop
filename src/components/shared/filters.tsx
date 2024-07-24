import { cn } from "@/lib/utils";
import React from "react";
import { FilterCheckbox, Title } from ".";

interface FiltersProps {
  className?: string;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="A" value="1" />
        <FilterCheckbox text="News" value="2" />
      </div>
    </div>
  );
};
