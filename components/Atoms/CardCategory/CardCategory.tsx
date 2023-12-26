import React from "react";
import Image from "next/image";
import { CategotyProps } from "@/app/lib/definitions";
import useMenuProducts from "@/hooks/useMenuProducts";

const CardCategory = ({ category }: CategotyProps) => {
  const { currentCategory, handleClickCategory }: any = useMenuProducts();
  const { name, icon, id } = category;
  return (
    <button
      onClick={() => handleClickCategory(category)}
      type="button"
      className={`${
        currentCategory?.id === id ? "bg-amber-400" : ""
      } text-2xl font-bold flex items-center gap-5 w-full border p-5 hover:bg-amber-400 hover:cursor-pointer`}
    >
      <Image
        src={`assets/img/icono_${icon}.svg`}
        alt="imagen"
        width={70}
        height={70}
      />
      <p>{name}</p>
    </button>
  );
};

export default CardCategory;
