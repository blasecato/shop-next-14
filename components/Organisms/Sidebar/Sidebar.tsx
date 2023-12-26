"use client";
import Image from "next/image";
import useMenuProducts from "@/hooks/useMenuProducts";
import CardCategory from "@/components/Atoms/CardCategory/CardCategory";
import { ICategoty } from "@/app/lib/definitions";

const Sidebar = () => {
  const { categories }: any = useMenuProducts();
  return (
    <>
      <Image
        width={300}
        height={100}
        src="/assets/img/logo.svg"
        alt="imagen logo"
      />
      <nav className="mt-10">
        {categories.map((category: ICategoty) => (
          <CardCategory category={category} key={category.id} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
