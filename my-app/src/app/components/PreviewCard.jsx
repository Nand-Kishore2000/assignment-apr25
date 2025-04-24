import React from 'react'
import { MdStarRate } from "react-icons/md";

function PreviewCard({ images,title, price, description }) {
  return (
    <div className="w-[80%] mx-auto flex  gap-8 h-full">
      <div className="hover:bg-slate-50 rounded-[20px] ">
        <img src={images[0]} alt="image" width={590} height={590} />
      </div>
      <div className='flex flex-col justify-center items-center text-left '>

      <h1 className="font-medium text-gray-500 hover:text-gray-600 my-2">
        {title}
      </h1>

      <p className="my-2 text-3xl tracking-tight text-gray-900">
        Price:{" "}
        <span className=" my-2 text-3xl tracking-tight text-gray-900">
          ${price}
        </span>
      </p>
      <p className="text-[19px] my-2 ">{description}</p>
      <div className="flex items-center">
        {[1, 2, 3, 4]?.map((index) => (
          <MdStarRate key={`${index}`} />
          ))}
      </div>
      
          </div>
    </div>
  );
}

export default PreviewCard  