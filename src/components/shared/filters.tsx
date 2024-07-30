"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { CheckboxFiltersGroup, RangeSlider, Title } from ".";
import { Input } from "../ui";

import { useFilters, useIngredients, useQueryFilters } from "@/hooks";

interface FiltersProps {
  className?: string;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((item) => ({
    text: item.name,
    value: String(item.id),
  }));

  const updateSliderPrices = (prices: number[]) => {
    filters.fn.setPrices("priceFrom", prices[0]);
    filters.fn.setPrices("priceTo", prices[1]);
  };

  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      <CheckboxFiltersGroup
        title="Test type"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.fn.setPizzaTypes}
        selectedValues={filters.pizzaTypes}
        items={[
          { text: "Thin", value: "111" },
          { text: "Traditional", value: "222" },
        ]}
      />

      <CheckboxFiltersGroup
        title="Sizes"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.fn.setSizes}
        selectedValues={filters.sizes}
        items={[
          { text: "20 cm", value: "20" },
          { text: "30 cm", value: "30" },
          { text: "40 cm", value: "40" },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            step={10}
            max={1000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) =>
              filters.fn.setPrices("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            step={10}
            max={1000}
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.fn.setPrices("priceTo", Number(e.target.value))
            }
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 1000,
          ]}
          onValueChange={updateSliderPrices}
        />
      </div>

      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.fn.setSelectedIngredients}
        selectedValues={filters.selectedIngredients}
      />
    </div>
  );
};
