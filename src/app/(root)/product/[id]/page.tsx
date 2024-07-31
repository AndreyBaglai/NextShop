import { notFound } from "next/navigation";
import { prisma } from "../../../../../prisma/prisma-client";
import {
  Container,
  ProductImage,
  ProductVariants,
  Title,
} from "@/components/shared";

export default async function Product({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage src={product.imageUrl} size={40} />

        <div className="w-[490px] bg-gray-100 p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            pariatur animi, ad quae, dolore labore
          </p>

          <ProductVariants
            selectedValue="2"
            items={[
              { name: "Small", value: "1" },
              { name: "Medium", value: "2" },
              { name: "Big", value: "3" },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
