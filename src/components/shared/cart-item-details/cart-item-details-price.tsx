import { cn } from "@/lib/utils";

interface CartItemDetailsPriceProps {
  value: number;
  className?: string;
}

export const CartItemDetailsPrice: React.FC<CartItemDetailsPriceProps> = ({
  value,
  className,
}) => {
  return <h2 className={cn("font-bold", className)}>{value} ₽</h2>;
};
