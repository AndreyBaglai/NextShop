import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";
import { updateCartTotalAmount } from "@/lib";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const data = (await req.json()) as { quantity: number };

    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "Invalid cart token" });
    }

    const cartItem = prisma.cartItem.findFirst({ where: { id } });

    if (!cartItem) {
      return NextResponse.json({ error: "Cart item not found" });
    }

    await prisma.cartItem.update({
      where: { id },
      data: { quantity: data.quantity },
    });

    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.log("[CART_PATCH] Server error", error);
    return NextResponse.json({ message: "Can't update cart" }, { status: 500 });
  }
}
