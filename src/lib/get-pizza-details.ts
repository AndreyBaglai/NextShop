import { mapPizzaType, PizzaSize, PizzaType } from "@/constants/pizza";
import { Ingredient, ProductVariant } from "@prisma/client";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";

export function getPizzaDetails(
  size: PizzaSize,
  type: PizzaType,
  variants: ProductVariant[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) {
  const textDescription = `${size} cm, ${mapPizzaType[type]} pizza`;
  const totalPrice = calcTotalPizzaPrice(
    size,
    type,
    variants,
    ingredients,
    selectedIngredients
  );

  return { textDescription, totalPrice };
}
