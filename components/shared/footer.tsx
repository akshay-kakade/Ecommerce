"use client";

import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { socials } from "@/lib/data";
import Image from "next/image";

export default function Footer() {

    return (
        <footer className="bg-amber-200 text-gray-1000 footer-container underline-link">
           <div className="w-full">
            <Button
            variant='ghost'
            className="bg-gray-50 w-full rounded-none"
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            >
                <ChevronUp className="mr-2 h-4 w-4" />
                Back to top
            </Button>
           </div>
           <div className="p-4">
            <div className="flex justify-center gap-3 text-sm ">
                <Link className="hover:underline hover:text-amber-600" href="/page/conditon-of-use">Terms And Conditions,</Link>
                <Link className="hover:underline hover:text-amber-600 " href="/page/privacy-policy">Privacy Policy,</Link>
                <Link className="hover:underline hover:text-amber-600" href="/page/help">Help</Link>
            </div>
            <div className="flex justify-center text-sm">
                <p>© 2025 {APP_NAME} PTV LTD.</p>
              
            </div>
            <div>
            <ul className="flex flex-1 justify-center gap-3"> 
             {socials.map(({id, url, icon, title }) => (
                    <li key={id}>
                        <a href={url} className="social-icon">
                            <Image 
                                src={icon}
                                alt={title}
                                className="size-6 object-contain hover:rotate-12"
                                width={24}
                                height={24}
                            />
                        </a>
                    </li>
             ))}
        </ul>
            </div>
            <div className="m5-8 justify-center text-sm text-black text-center">
            Newasa Rd, Shrirampur, Siddharth Nagar, Maharashtra 413709, Call : +91 1444354645, email : swiftstore@gmail.com
            </div>
           </div>
        </footer>
    );
}