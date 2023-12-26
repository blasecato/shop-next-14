"use client";
import { useContext } from "react";
import MenuProductsContex from "@/contex/MenuProductsProvider";

const useMenuProducts = () => {
  return useContext(MenuProductsContex);
};
export default useMenuProducts;
