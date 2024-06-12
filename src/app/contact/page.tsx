"use client"
import { useEffect, useRef } from "react";

import gsap from "gsap";

const page = () => {
  const container = useRef<null | HTMLElement>(null)

  useEffect(()=>{
    if(container.current) {
      let counter = 0

      for (const child of container.current.children) {
        const headerElem = child.getElementsByTagName('h3')[0]
        const textElem = child.getElementsByTagName('p')[0]
        
        gsap.fromTo(headerElem, {opacity: 0, y: 10}, {opacity: 1, y: 0, duration: 0.4, delay: 0 + (counter*0.35)})
        gsap.fromTo(textElem, {opacity: 0, y: 10}, {opacity: 1, y: 0, duration: 0.4, delay: 0.2 + (counter*0.35)})

        counter++
      }
    }
  }, [])

  return (
    <article ref={container} className="flex flex-col gap-6 ml-96 pt-16">
        <section className="w-8/12">
          <h3 className="font-bold text-3xl">Iben Hildelof</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt atque. Iusto animi nesciunt veniam illum qui consequatur blanditiis voluptatibus dolores officia voluptatem
            voluptate quo ad tempora tempore temporibus suscipit, earum minus.
          </p>
        </section>
        <section className="w-8/12">
          <h3 className="font-bold text-3xl">Danny Marthen</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt atque. Iusto animi nesciunt veniam illum qui consequatur blanditiis voluptatibus dolores officia voluptatem
            voluptate quo ad tempora tempore temporibus suscipit, earum minus.
          </p>
        </section>
        <section className="w-8/12">
          <h3 className="font-bold text-3xl">Owen Spectrac</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt atque. Iusto animi nesciunt veniam illum qui consequatur blanditiis voluptatibus dolores officia voluptatem
            voluptate quo ad tempora tempore temporibus suscipit, earum minus.
          </p>
        </section>
      </article>
  );
};

export default page;
