/*import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { APP_NAME } from "@/lib/constants";
const categories = ['men', 'women', 'kids', 'accessories', 'shoes', 'electronics', 'mobile', 'laptops', 'home', 'furniture', 'beauty', 'health', 'sports', 'fitness', 'books', 'stationery', ]

export default async function Search() {
    return (
        <form action='/search' method="GET" className="flex items-stretch h-10">
           <Select name="category">
            <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r  rounded-r-none rounded-l-md rtl:rounded-r-md rtl:rounded-l-none">
            <SelectValue placeholder='All' />
            </SelectTrigger>
            <SelectContent position="popper">
                <SelectItem value='all'>All</SelectItem>
                {categories.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
            </SelectContent>
           </Select>
            <Input
                name="q"
                type="search"
                placeholder={`Search Site ${APP_NAME}`} 
                className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full"
                />
             
                <button type="submit" 
                className="bg-primary text-primary-foreground rounded-s-none rounded-e-md h-full px-3 py-2"
                title="Search">
                    <SearchIcon className="w-6 h-6" />
                </button>
        </form>
    ) 
}*/
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { APP_NAME } from "@/lib/constants";

const categories = ['men', 'women', 'kids', 'accessories', 'shoes', 'electronics', 'mobile', 'laptops', 'home', 'furniture', 'beauty', 'health', 'sports', 'fitness', 'books', 'stationery'];

export default async function Search() {
    const columns = [];
    const itemsPerColumn = Math.ceil(categories.length / 2);
    for (let i = 0; i < categories.length; i += itemsPerColumn) {
        columns.push(categories.slice(i, i + itemsPerColumn));
    }

    return (
        <form action='/search' method="GET" className="flex items-stretch h-10">
            <Select name="category">
                <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded-l-md rtl:rounded-r-md rtl:rounded-l-none">
                    <SelectValue placeholder='All' />
                </SelectTrigger>
                <SelectContent className="flex flex-col max-w-full">
                    <SelectItem value='all'>All</SelectItem>
                    <div className="flex">
                        {columns.map((column, colIndex) => (
                            <div key={colIndex} className="flex flex-col w-1/2">
                                {column.map((category, catIndex) => (
                                    <SelectItem key={catIndex} value={category}>{category}</SelectItem>
                                ))}
                            </div>
                        ))}
                    </div>
                </SelectContent>
            </Select>
            <Input
                name="q"
                type="search"
                placeholder={`Search on ${APP_NAME}`}
                className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full"
            />
            <button type="submit" 
                    className="bg-primary text-primary-foreground rounded-s-none rounded-e-md h-full px-3 py-2"
                    title="Search">
                <SearchIcon className="w-6 h-6 cursor-pointer" />
            </button>
        </form>
    );
}

