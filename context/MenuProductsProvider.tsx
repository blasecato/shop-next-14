"use client";

import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { ICategoty, IProduct, IOrder } from "@/app/lib/definitions";
import { Provider } from "@/app/lib/definitions";
import { toast } from "react-toastify";

const MenuProsuctsContex = createContext({});

const MenuProsuctsProvider = ({ children }: Provider) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [productSelected, setProductSelected] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalPlacement] = useState("center");
  const [listOrders, setListOrders] = useState<IOrder[]>([]);

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

  const handleAddOrder = (order: IOrder) => {
    if (listOrders.some((orderState) => orderState.id === order.id)) {
      const orderUpdate: any = listOrders.map((orderState) =>
        orderState.id === order.id ? order : orderState
      );
      toast.success("Pedido editado");
      setListOrders(orderUpdate);
    } else {
      setListOrders([...listOrders, order]);
      toast.success("Agregado al pedido");
    }
    setProductSelected({});
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
        listOrders,
        handleClickCategory,
        handleSelectProduct,
        handleChangeModal,
        handleAddOrder,
      }}
    >
      {children}
    </MenuProsuctsContex.Provider>
  );
};

export { MenuProsuctsProvider };
export default MenuProsuctsContex;
