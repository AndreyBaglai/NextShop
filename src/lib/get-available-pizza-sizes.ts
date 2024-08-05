import { Variant } from "@/components/shared/product-variants";
import { pizzaSizes, PizzaType } from "@/constants/pizza";
import { ProductVariant } from "@prisma/client";

export function getAvailablePizzaSizes(
  type: PizzaType,
  variants: ProductVariant[]
): Variant[] {
  const filteredPizzasByType = variants.filter(
    (variant) => variant.pizzaType === type
  );
  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));
}
