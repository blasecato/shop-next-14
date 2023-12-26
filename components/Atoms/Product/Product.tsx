import { IProduct } from "@/app/lib/definitions";
import Image from "next/image";
import useMenuProducts from "@/hooks/useMenuProducts";
import { formaterMoney } from "@/app/lib/utils";
import ModalProduct from "../Modals/ModalProduct";

interface Props {
  product: IProduct;
}
const Product = ({ product }: Props) => {
  const { handleSelectProduct, handleChangeModal }: any = useMenuProducts();

  const { name, price, image } = product;

  return (
    <div className="p-3 border flex flex-col justify-between">
      <div>
        <Image
          width={200}
          height={300}
          src={`/assets/img/${image}.jpg`}
          alt={`imagen platillo ${name}`}
          className="my-0 mx-auto"
        />
        <h3 className="text-xl font-bold mt-5">{name}</h3>
        <p className="mt-5 font-black text-1xl text-amber-500">
          {formaterMoney(price)}
        </p>
      </div>
      <div className="">
        <button
          type="button"
          className="bg-amber-400 hover:bg-amber-500 w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            handleSelectProduct(product);
            handleChangeModal();
          }}
        >
          Agregar
        </button>
      </div>
      <ModalProduct />
    </div>
  );
};

export default Product;
