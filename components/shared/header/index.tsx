import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Search from "./search";
import Menu from "./menu";
import data from "@/lib/data";
import { getAllCategories } from "@/lib/actions/product.actions";
import Sidebar from "./sidebar";

export default async function Header() {
    const categories = await getAllCategories()
    return (
        <header className="bg-amber-200 text-gray-1000 header-container">
        <div className="px-2">
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <Link href="/" className="flex items-center mr-1.5 bg-transparent rounded-2xl">
                    <Image 
                        src='/logo.png'
                        width={150}  
                        height={500}  
                        alt={`${APP_NAME} logo`}
                        className="logo-image"
                    />
                               
                            </Link>
                    </div>
                     <div className="hidden md:block flex-1 max-w-xl">
                        <Search />
                     </div>
                     <Menu />
                </div>
                <div className="md:hidden block py-2">
                    <Search />
                </div>
                      
            </div>
             <div className="flex items-center px-3 mb-[1px] bg-amber-200">
             <Sidebar categories={categories}/>
              <div className="flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]">
            {data.headerMenus
                .filter((menu) => menu.href !== undefined)
                .map((menu) => (
                    <Link 
                        href={menu.href || '#'}
                        key={menu.href}
                        className="header-button !p-2"
                    >
                        {menu.name}
                    </Link>
            ))}

              </div>
                
             </div>
        </header>
    )
} /// 31:00