"use client";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import {  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";


export  function HomeCarousel({items,}: {
    items: {
        image: string;
        title: string;
        url: string;
    }[]
}) {
    const plugin = React.useRef(
        Autoplay({delay: 2000, stopOnInteraction: true })
    )
    
return (
    <Carousel 
      dir="ltr"
      plugins={[plugin.current]}
      className="w-full mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent>
            {items.map((item) => (
                <CarouselItem key={item.title}>
                    <Link href={item.url}>
                    <div className="flex aspect-[15/6] items-center justify-center p-6 relative -m-1 mt-0"> 
                       <Image 
                         src={item.image}
                         alt={item.title}
                         fill
                         className="object-cover"
                         priority
                       />
                       <div className="absolute w-1/3 right-0 md:left-32 top-1/2 transform -translate-y-1/2">
                          <h2 className={"text-xl md:text-3xl font-bold text-primary"}>
                            {item.title}
                          </h2>
                       </div>
                    </div>
                    </Link>
                    </CarouselItem>
            ))}
                
        </CarouselContent>
        <CarouselPrevious className="left-0 md:left-12"/>
        <CarouselNext className="right-0 md:right-12"/>
      </Carousel>
   
    )
   
}