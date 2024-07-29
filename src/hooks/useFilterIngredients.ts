import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";

export const useFilterIngredients = (): {
  ingredients: Ingredient[];
  loading: boolean;
} => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getIngredients() {
      try {
        setLoading(true);
        const ingredientsData = await Api.ingredients.getAll();
        setIngredients(ingredientsData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    getIngredients();
  }, []);

  return { ingredients, loading };
};
