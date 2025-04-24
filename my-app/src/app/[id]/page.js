"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

import { MdStarRate } from "react-icons/md";

function page({ params }) {
  const [product, setProduct] = useState(null);


  const { id } = React.use(params);

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(response.data);
      setProduct(response.data);
    }
    fetchProducts();
  }, []);
  return (
    <div>
      <Navbar />

      <div className="flex flex-row gap-4 w-[80%] items-center align-middle">
        <div className="hover:bg-slate-50 rounded-[20px] ">
          <img src={product?.images[0]} alt="image" width={590} height={590} />
        </div>
        <div>
          <div className="w-[80%]">
            <h1 className="font-medium text-gray-500 hover:text-gray-600">
              {product?.title}
            </h1>

            <p className=" text-3xl tracking-tight text-gray-900">
              Price:{" "}
              <span className="text-3xl tracking-tight text-gray-900">
                ${product?.price}
              </span>
            </p>
            <p>{product?.description}</p>
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <MdStarRate
                  key={rating}
               
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
