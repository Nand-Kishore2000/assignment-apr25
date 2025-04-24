"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import { useSearch } from "../../SearchContext";

function AllProducts() {
  const [products, setProducts] = useState([]);
   const { searchQuery } = useSearch();


  useEffect(() => {
    async function fetchProducts(){
    const response = await axios.get("https://dummyjson.com/products?limit=20");
    console.log(response.data.products);
    setProducts(response.data.products);
    }
    fetchProducts();
  }, []);

  
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="w-full h-full ">
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid gap-y-10 grid-cols-4 gap-x-8">
          {filtered.length > 0 ?  filtered.map((data) => (
            <Card
              key={data.id}
              id={data?.id}
              title={data?.title}
              thumbnail={data?.thumbnail}
              price={data?.price}
            />
          )) : <div className="mx-auto flex justify-center items-center  h-full w-full text-[24px]">No data found.</div>}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
