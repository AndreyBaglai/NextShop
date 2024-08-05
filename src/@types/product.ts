import { Ingredient, Product, ProductVariant } from "@prisma/client";

export type ProductData = Product & {
  variants: ProductVariant[];
  ingredients: Ingredient[];
};
