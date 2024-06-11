"use client";
import React, { useEffect, useRef, useState } from "react";

import BackgroundImage from "../components/BackgroundImage";
import useSimpleFetch from "@/utils/simpleFetch";
import gsap from "gsap";

interface ShapedObject {
  name: string;
  image: string;
  description: string;
  id: number;
  created_at: string;
}

const page = () => {
  const [currentObject, setCurrentObject] = useState<null | number>(null);
  const [data, setData] = useState<null | ShapedObject[]>(null);
  const container = useRef<null | HTMLElement>(null);
  const descElem = useRef<null | HTMLParagraphElement>(null)

  useEffect(() => {
    (async () => {
      const response: { data: any; message: string } = await useSimpleFetch("/api/objects", "GET", undefined, undefined);
      if (response) {
        console.log(response);
        setData(response.data);
      }
    })();
  }, []);

  useEffect(() => {
    if (data && container.current) {
      let counter = 1;
      for (const child of container.current.children) {
        gsap.fromTo(child, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.2 * counter });
        counter++;
      }
    }
  }, [data]);

  useEffect(()=>{
    if(currentObject !== null && descElem.current) {
      gsap.fromTo(descElem.current, {opacity: 0, x: -10}, {opacity: 1, x: 0, duration: 0.25})
    }
  }, [currentObject])

  return (
    <>
      <BackgroundImage image="/images/background-tours.png" className="" />
      <article className="flex flex-col items-center justify-center mt-32">
        {data && (
          <>
            <section ref={container} className="flex flex-row w-7/12 justify-center gap-20">
              {data.map((object, index: number) => (
                <div
                  key={"object-" + index}
                  className={"flex flex-col w-full cursor-pointer " + ((index === currentObject) ? "font-bold bg-[radial-gradient(#ffffff_0%,#ffffff00_75%)]" : "hover:font-bold") }
                  style={{ opacity: 0 }}
                  onClick={(e) => setCurrentObject(index)}
                >
                  <h5 className="text-2xl text-center mb-8">{object.name}</h5>
                  <figure className="h-full w-full flex items-center">
                    <img src={"/images/" + object.image} className="w-full h-auto" alt="Image of a white cube" />
                  </figure>
                </div>
              ))}
            </section>
            <section>
              <p ref={descElem} className="mt-10 opacity-0" style={{opacity: 0}}>{currentObject != null && data[currentObject].description}</p>
            </section>
          </>
        )}
      </article>
    </>
  );
};

export default page;
