"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import React from "react";
import { useRouter } from "next/navigation";
import { ChoosePizzaForm, ChooseProductForm } from "..";
import { ProductData } from "@/@types/product";
import { useCartStore } from "@/store/cart";
import toast from "react-hot-toast";

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
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);

  const onSubmit = async (
    productVariantId?: number,
    ingredients?: number[]
  ) => {
    try {
      const variantId = productVariantId ?? firstItem.id;

      await addCartItem({ productVariantId: variantId, ingredients });
      toast.success(`${product.name} added in the cart`);
      router.back();
    } catch (error) {
      toast.error("Can't add product in the cart");
      console.error(error);
    }
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
            loading={loading}
            imageUrl={product.imageUrl}
            name={product.name}
            variants={product.variants}
            ingredients={product.ingredients}
            onSubmit={onSubmit}
          />
        ) : (
          <ChooseProductForm
            loading={loading}
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onSubmit}
            price={firstItem.price}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
