"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Loader from "./Loader"; // Make sure you create this component

export default function ClientLayout({ children }) {


  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {



    const handleStart = () => setLoading(true);

    const handleComplete = () => setLoading(false);

    router.events?.on("routeChangeStart", handleStart);

    router.events?.on("routeChangeComplete", handleComplete);

    router.events?.on("routeChangeError", handleComplete);

    return () => {
      router.events?.off("routeChangeStart", handleStart);

      router.events?.off("routeChangeComplete", handleComplete);
      
      router.events?.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading ? <Loader /> : children}
    </>
  );
}
