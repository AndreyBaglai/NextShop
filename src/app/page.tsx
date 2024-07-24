import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductsGroupList,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All products" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Product 1"
                categoryId={1}
                products={[
                  {
                    id: 1,
                    name: "Product name",
                    imageUrl: "/mock.jpg",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Product name",
                    imageUrl: "/mock.jpg",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Product name",
                    imageUrl: "/mock.jpg",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Product name",
                    imageUrl: "/mock.jpg",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Product name",
                    imageUrl: "/mock.jpg",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Product name",
                    imageUrl: "/mock.jpg",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Product name",
                    imageUrl: "/mock.jpg",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />

              <ProductsGroupList
                title="Product 2"
                categoryId={1}
                products={[
                  {
                    id: 1,
                    name: "Product name",
                    imageUrl: "/mock.jpg",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Product name",
                    imageUrl: "/mock.jpg",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Product name",
                    imageUrl: "/mock.jpg",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Product name",
                    imageUrl: "/mock.jpg",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Product name",
                    imageUrl: "/mock.jpg",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Product name",
                    imageUrl: "/mock.jpg",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Product name",
                    imageUrl: "/mock.jpg",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
