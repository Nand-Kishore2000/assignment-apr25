"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

import { API_BASE_URL } from "../global";
import APIservice from "../services/api";
import PreviewCard from "../components/PreviewCard";
import Loader from "../components/Loader";

const BASE_URL = API_BASE_URL;
function page({ params }) {
  const [product, setProduct] = useState(null);

    const api = new APIservice(BASE_URL);

  const { id } = React.use(params);

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/products/${id}`);
      console.log(response);
      setProduct(response);
    }
    fetchProducts();
  }, []);
  return (
    <div className="h-full">
      <Navbar />

      <div className="py-10 font-bold mt-[50px] block text-center text-[22px]">Product detail page</div>
      {product ? (
        <div className="flex flex-row gap-4 w-[80%] mx-auto  h-full items-center justify-center align-middle">
          
            <PreviewCard
              images={product?.images}
              title={product?.title}
              price={product?.price}
              description={product?.description}
            />
          
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default page;
