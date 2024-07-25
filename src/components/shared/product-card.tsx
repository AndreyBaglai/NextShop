import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Title } from ".";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nemo
          eveniet sunt inventore mollitia et, perferendis ea accusamus, optio
          pariatur maiores eum. At fuga veniam saepe molestiae? Vero, voluptas
          odit.
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-[20px]">
            from <p>{price} $</p>
          </span>
          <Button variant="secondary" className="text-base font-bold">
            <Plus className="mr-1" size={20} />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};
