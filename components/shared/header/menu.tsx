import { ShoppingCartIcon, User2Icon } from "lucide-react";
import Link from "next/link";

export default function Menu() { 
return ( 
    <div className="flex justify-end">
        <nav className="flex gap-3 w-full">
          <Link href="/singin" className="hover:text-amber-700  flex items-center mr-2 p-1">
          <User2Icon className="h-6 w-8"/> Sign In
          </Link>
            <Link href="/cart" className="header-button mr-5">
             <div>
              <ShoppingCartIcon className="h-8 w-8"/>
              Cart
             </div>
             </Link>
        </nav>
    </div>
)

}