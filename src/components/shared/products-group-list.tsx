"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { ProductCard, Title } from ".";

interface ProductsGroupListProps {
  title: string;
  products: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<ProductsGroupListProps> = ({
  title,
  products,
  categoryId,
  listClassName,
  className,
}) => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title, categoryId);
    }
    console.log(title);
  }, [title, intersection?.isIntersecting, categoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
