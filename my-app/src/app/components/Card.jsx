"use client"; // <-- Add this at the very top

import React from "react";
import { useRouter } from "next/navigation";

function Card({id, title, thumbnail, price }) {

    const router = useRouter();

    function openPreview() {
      router.push(`/${id}`);
    }
  return (
    <div
      onClick={() => openPreview()}
      className="cursor-pointer flex flex-col gap-4 items-center  w-full h-full mt-4 mb-8 mx-auto "
    >
      <img src={thumbnail} alt="thumbnail" className="hover:scale-105 hover:duration-150" width={290} height={290}/>
      <h3 className="hover:underline">{title}</h3>
      <p className="">$ {price}</p>
    </div>
  );
}
 
export default Card;
