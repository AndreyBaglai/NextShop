import { axiosInstance } from "./axios";
import { ApiRoutes } from "./constants";
import { CartDTO } from "./dto/cart.dto";

export const getCart = async (): Promise<CartDTO> => {
  const { data } = await axiosInstance.get<CartDTO>(ApiRoutes.CART);
  return data;
};

export const updateItemQuantity = async (
  cartId: number,
  quantity: number
): Promise<CartDTO> => {
  const { data } = await axiosInstance.patch<CartDTO>(
    ApiRoutes.CART_UPDATE + cartId,
    {
      quantity,
    }
  );

  return data;
};
