import {User2Icon } from "lucide-react";
import Link from "next/link";
import CartButton from "./cart-button";

export default function Menu() { 
return ( 
    <div className="flex justify-end">
        <nav className="flex gap-3 w-full">
          <Link href="/singin" className="hover:text-amber-700  flex items-center mr-2 p-1">
          <User2Icon className="h-6 w-8"/> Sign In
          </Link>
           <CartButton />
        </nav>
    </div>
)

}