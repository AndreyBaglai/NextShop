"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import React from "react";
import { useRouter } from "next/navigation";
import { Title } from "..";

interface ChooseProductModalProps {
  product: Product;
  className?: string;
}

export const ChooseProductModal: React.FC<
  React.PropsWithChildren<ChooseProductModalProps>
> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <Title text={product.name} />
      </DialogContent>
    </Dialog>
  );
};
