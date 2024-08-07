"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import React from "react";
import { useRouter } from "next/navigation";
import { ChoosePizzaForm, ChooseProductForm } from "..";
import { ProductData } from "@/@types/product";
import { useCartStore } from "@/store/cart";

interface ChooseProductModalProps {
  product: ProductData;
  className?: string;
}

export const ChooseProductModal: React.FC<
  React.PropsWithChildren<ChooseProductModalProps>
> = ({ product, className }) => {
  const router = useRouter();
  const firstItem = product.variants[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const addCartItem = useCartStore((state) => state.addCartItem);

  const onAddProduct = () => {
    addCartItem({ productVariantId: firstItem.id });
  };
  const onAddPizza = (productVariantId: number, ingredients: number[]) => {
    addCartItem({ productVariantId, ingredients });
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            variants={product.variants}
            ingredients={product.ingredients}
            onSubmit={onAddPizza}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onAddProduct}
            price={firstItem.price}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
