"use client";

import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { ICategoty, IProduct } from "@/app/lib/definitions";
import { Provider } from "@/app/lib/definitions";

const MenuProsuctsContex = createContext({});

const MenuProsuctsProvider = ({ children }: Provider) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [productSelected, setProductSelected] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalPlacement] = useState("center");

  const getCategories = async () => {
    const { data } = await axios("./api/categories");
    setCategories(data);
  };

  const handleClickCategory = (category: ICategoty) => {
    setCurrentCategory(category);
  };

  const handleSelectProduct = (product: IProduct) => {
    setProductSelected(product);
  };

  const handleChangeModal = () => {
    setModalOpen(!isModalOpen);
  };
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setCurrentCategory(categories[0]);
  }, [categories]);
  return (
    <MenuProsuctsContex.Provider
      value={{
        categories,
        currentCategory,
        productSelected,
        isModalOpen,
        modalPlacement,
        handleClickCategory,
        handleSelectProduct,
        handleChangeModal,
      }}
    >
      {children}
    </MenuProsuctsContex.Provider>
  );
};

export { MenuProsuctsProvider };
export default MenuProsuctsContex;
