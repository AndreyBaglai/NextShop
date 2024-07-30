import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSet } from "react-use";

interface SliderPriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends SliderPriceProps {
  sizes: string;
  pizzaTypes: string;
  ingredients: string;
}

export interface Filters {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
  prices: SliderPriceProps;
}

interface ReturnProps extends Filters {
  fn: {
    setPrices: (name: keyof SliderPriceProps, value: number) => void;
    setPizzaTypes: (value: string) => void;
    setSizes: (value: string) => void;
    setSelectedIngredients: (value: string) => void;
  };
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;
  const router = useRouter();

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(
      searchParams.has("ingredients")
        ? searchParams.get("ingredients")?.split(",")
        : []
    )
  );

  const [prices, setPrices] = useState<SliderPriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : []
    )
  );

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.has("pizzaTypes")
        ? searchParams.get("pizzaTypes")?.split(",")
        : []
    )
  );

  const updatePrice = (name: keyof SliderPriceProps, value: number) => {
    setPrices((prev) => ({ ...prev, [name]: value }));
  };

  return {
    sizes,
    pizzaTypes,
    selectedIngredients,
    prices,
    fn: {
      setPrices: updatePrice,
      setPizzaTypes: togglePizzaTypes,
      setSelectedIngredients: toggleIngredients,
      setSizes: toggleSizes,
    },
  };
};
