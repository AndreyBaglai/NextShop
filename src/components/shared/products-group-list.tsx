"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { ProductCard, Title } from ".";
import { useCategoryStore } from "@/store/category";

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
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  console.log(products);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [setActiveCategoryId, intersection?.isIntersecting, categoryId]);

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
            price={product.variants[0].price}
          />
        ))}
      </div>
    </div>
  );
};
