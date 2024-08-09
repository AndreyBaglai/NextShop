import { CartDTO } from "@/services/dto/cart.dto";
import { CartStateItem } from "@/store/cart";
import { calcCartItemTotalPrice } from ".";

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
  const items = data.items.map((item) => ({
    id: item.id,
    name: item.productVariant.product.name,
    quantity: item.quantity,
    imageUrl: item.productVariant.product.imageUrl,
    pizzaSizes: item.productVariant.size,
    price: calcCartItemTotalPrice(item),
    pizzaType: item.productVariant.pizzaType,
    ingredients: item.ingredients.map((ingredient) => ({
      name: ingredient.name,
      price: ingredient.price,
    })),
  }));

  return {
    totalAmount: data.totalAmount,
    items,
  };
};
