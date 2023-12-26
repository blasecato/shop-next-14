"use client";
import { useContext } from "react";
import MenuProductsContex from "@/context/MenuProductsProvider";

const useMenuProducts = () => {
  return useContext(MenuProductsContex);
};
export default useMenuProducts;
