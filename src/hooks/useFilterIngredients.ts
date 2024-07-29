import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSet } from "react-use";

type ReturnType = {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
};

export const useFilterIngredients = (): ReturnType => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(false);

  const [selectedIds, { toggle }] = useSet(new Set<string>([]));

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

  return { ingredients, loading, onAddId: toggle, selectedIds };
};
