"use client";

import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from ".";
import { getCartItemDetails } from "@/lib";

interface CartDrawerProps {
  className?: string;
}

export const CartDrawer: React.FC<PropsWithChildren<CartDrawerProps>> = ({
  className,
  children,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            In the cart <span className="font-bold">3 items</span>
          </SheetTitle>
        </SheetHeader>

        <div className="-mx-6 mt-5 overflow-auto flex-1">
          <div className="mb-2">
            <CartDrawerItem
              id={1}
              imageUrl="/mock.jpg"
              details={getCartItemDetails(
                [{ name: "dcddd" }, { name: "ddcd33333333333333dc" }],
                1,
                30
              )}
              name={"title"}
              price={410}
              quantity={2}
            />
          </div>
          <div className="mb-2">
            <CartDrawerItem
              id={1}
              imageUrl="/mock.jpg"
              details={getCartItemDetails(
                [{ name: "dcddd" }, { name: "ddcd33333333333333dc" }],
                1,
                30
              )}
              name={"title"}
              price={410}
              quantity={2}
            />
          </div>
          <div className="mb-2">
            <CartDrawerItem
              id={1}
              imageUrl="/mock.jpg"
              details={getCartItemDetails(
                [{ name: "dcddd" }, { name: "ddcd33333333333333dc" }],
                1,
                30
              )}
              name={"title"}
              price={410}
              quantity={2}
            />
          </div>
          <div className="mb-2">
            <CartDrawerItem
              id={1}
              imageUrl="/mock.jpg"
              details={getCartItemDetails(
                [{ name: "dcddd" }, { name: "ddcd33333333333333dc" }],
                1,
                30
              )}
              name={"title"}
              price={410}
              quantity={2}
            />
          </div>
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Total
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>

              <span className="font-bold text-lg">300 $</span>
            </div>

            <Link href="/cart">
              <Button type="submit" className="w-full h-12 text-base">
                Order
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
