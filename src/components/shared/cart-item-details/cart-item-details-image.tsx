import { cn } from "@/lib/utils";

interface CartItemDetailsImageProps {
  src: string;
  className?: string;
}

export const CartItemDetailsImage: React.FC<CartItemDetailsImageProps> = ({
  src,
  className,
}) => {
  return <img className={cn("w-[60px] h-[60px]", className)} src={src} />;
};
