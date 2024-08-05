import { PizzaSize, PizzaType } from "@/constants/pizza";
import { Ingredient, ProductVariant } from "@prisma/client";

export function calcTotalPizzaPrice(
  size: PizzaSize,
  type: PizzaType,
  variants: ProductVariant[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
): number {
  const pizzaPrice =
    variants.find(
      (variant) => variant.pizzaType === type && variant.size === size
    )?.price || 0;
  const ingredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return ingredientsPrice + pizzaPrice;
}
