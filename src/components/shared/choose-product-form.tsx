import { cn } from "@/lib/utils";
import { Title } from ".";
import { Button } from "../ui";

interface ChooseProductFormProps {
  imageUrl: string;
  name: string;
  loading?: boolean;
  onSubmit?: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChooseProductForm: React.FC<ChooseProductFormProps> = ({
  name,
  imageUrl,
  loading,
  onSubmit,
  className,
}) => {
  return (
    <div className={cn("flex flex-1", className)}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>

      <div className="w-[490px] bg-gray-100 p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          provident, explicabo ipsum assumenda pariatur
        </p>

        <Button className="h-[55px] px-10 text-base w-full rounded-[18px] mt-10">
          Add to cart {350}
        </Button>
      </div>
    </div>
  );
};
