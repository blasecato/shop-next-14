"use client";
import React from "react";
import useMenuProducts from "@/hooks/useMenuProducts";
import Product from "@/components/Atoms/Product/Product";
import { IProduct } from "@/app/lib/definitions";

const Dashboard = () => {
  const { currentCategory }: any = useMenuProducts();

  return (
    <>
      <h1 className="text-4xl font-black">
        Categotia: {currentCategory?.name}
      </h1>
      <p className="mt-5">Elige y personaliza tu pedido a continuación</p>
      <div className="grid gap-4 mt-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {currentCategory?.products?.map((product: IProduct) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
