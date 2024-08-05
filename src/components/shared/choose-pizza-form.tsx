"use client";

import { cn } from "@/lib/utils";
import { Ingredient, ProductVariant } from "@prisma/client";
import { IngredientItem, PizzaImage, ProductVariants, Title } from ".";
import { Button } from "../ui";
import { PizzaSize, PizzaType, pizzaTypes } from "@/constants/pizza";
import { getPizzaDetails } from "@/lib";
import { usePizzaOptions } from "@/hooks";

interface ChoosePizzaFormProps {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  variants: ProductVariant[];
  loading?: boolean;
  onSubmit?: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChoosePizzaForm: React.FC<ChoosePizzaFormProps> = ({
  name,
  variants,
  imageUrl,
  ingredients,
  loading,
  onSubmit,
  className,
}) => {
  const {
    type,
    size,
    selectedIngredients,
    availableSizes,
    setSize,
    setType,
    addIngredient,
  } = usePizzaOptions(variants);

  const { textDescription, totalPrice } = getPizzaDetails(
    size,
    type,
    variants,
    ingredients,
    selectedIngredients
  );

  const onAddCart = () => {
    // onSubmit?.()
    console.log({ size, type, ingredients: selectedIngredients });
  };

  return (
    <div className={cn("flex flex-1", className)}>
      <PizzaImage src={imageUrl} size={size} />

      <div className="w-[490px] bg-gray-100 p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDescription}</p>

        <div className="flex flex-col gap-4 mt-5">
          <ProductVariants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <ProductVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                active={selectedIngredients.has(ingredient.id)}
                onClick={() => addIngredient(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={onAddCart}
          className="h-[55px] px-10 text-base w-full rounded-[18px] mt-10"
        >
          Add to cart {totalPrice} $
        </Button>
      </div>
    </div>
  );
};
