import { cn } from "@/lib/utils";
import React from "react";

import Image from "next/image";
import { CartButton, Container, SearchInput } from ".";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" width={35} height={35} alt="Logo" />
            <div>
              <h1 className="text-2xl uppercase font-black">Home title</h1>
              <p className="text-sm text-gray-400 leading-3">Sub text title</p>
            </div>
          </div>
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Log In
          </Button>

          <CartButton />
        </div>
      </Container>
    </header>
  );
};
