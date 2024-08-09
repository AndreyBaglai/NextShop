import { axiosInstance } from "./axios";
import { ApiRoutes } from "./constants";
import { CartDTO, CreateCartItemValues } from "./dto/cart.dto";

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

export const removeCartItem = async (id: number): Promise<CartDTO> => {
  const { data } = await axiosInstance.delete<CartDTO>(
    ApiRoutes.CART_DELETE + id
  );

  return data;
};

export const addCartItem = async (
  values: CreateCartItemValues
): Promise<CartDTO> => {
  const { data } = await axiosInstance.post<CartDTO>(ApiRoutes.CART, values);

  return data;
};
