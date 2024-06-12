"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const hRef = useRef<null | HTMLHeadingElement>(null)
  const textRef1 = useRef<null | HTMLParagraphElement>(null)
  const textRef2 = useRef<null | HTMLParagraphElement>(null)

  useEffect(()=>{
    if(hRef && textRef1 && textRef2) {
      const ctx = gsap.context(()=>{
        gsap.fromTo(hRef.current, {x: -30, opacity: 0.25}, {x: 0, opacity: 1, duration: 1})
        gsap.fromTo(textRef1.current, {x: -10, opacity: 0}, {x: 0, opacity: 1, delay: 0.5, duration: 0.5})
        gsap.fromTo(textRef2.current, {x: -10, opacity: 0}, {x: 0, opacity: 1, delay: 0.75, duration: 0.5})
      })

      return () => ctx.revert();
    }
  })

  return (
    <article className="mt-40">
        <h1 className="font-black text-8xl" ref={hRef}>
          light in a <span className="text-orange-500">box</span>
        </h1>
        <section className="w-1/2">
          <p className="my-3" ref={textRef1}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quasi reprehenderit sequi suscipit accusamus dolores blanditiis possimus, minus natus, similique assumenda, a autem animi
            molestiae.
          </p>
          <p ref={textRef2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consectetur, unde, quasi corrupti iure non possimus laboriosam asperiores, deleniti esse quaerat voluptate officia vel?
          </p>
        </section>
      </article>
  );
}
