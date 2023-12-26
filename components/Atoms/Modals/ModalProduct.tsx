import React, { useEffect, useState } from "react";
import useMenuProducts from "@/hooks/useMenuProducts";
import { formaterMoney } from "@/app/lib/utils";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const ModalProduct = () => {
  const [amount, setAmount] = useState(1);
  const [edition, setEdition] = useState(false);
  const {
    handleChangeModal,
    isModalOpen,
    modalPlacement,
    productSelected,
    handleAddOrder,
    listOrders,
  }: any = useMenuProducts();
  const { name, description, image, price } = productSelected;

  const handleCahngeAmount = (type: string) => {
    if (type === "addition") {
      setAmount(amount + 1);
    }
    if (type === "subtraction") {
      if (amount <= 1) {
        setAmount(1);
        return;
      }
      setAmount(amount - 1);
    }
  };
  const onCloseModal = () => {
    setAmount(1);
    handleChangeModal();
  };

  useEffect(() => {
    if (
      listOrders.some((orderState: any) => orderState.id === productSelected.id)
    ) {
      const productEdit = listOrders.find(
        (orderState: any) => orderState.id === productSelected.id
      );
      setEdition(true);
      setAmount(productEdit.amount);
    }
  }, [listOrders, productSelected]);

  return (
    <Modal
      placement={modalPlacement}
      isOpen={isModalOpen}
      onClose={onCloseModal}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold mt-5">{name}</h1>
            </ModalHeader>
            <ModalBody>
              <div className="md:flex gap-10">
                <div className="md:w-1/1">
                  <Image
                    width={100}
                    height={200}
                    alt="imagen producto"
                    src={`/assets/img/${image}.jpg`}
                    className="mx-auto my-3"
                  />
                  <div className="mt-3 flex justify-between w-full items-center">
                    <p className="font-black text-3xl text-amber-500">
                      {formaterMoney(price)}
                    </p>
                    <div className="flex items-center gap-4">
                      <Button
                        className="w-5 bg-transparent p-0 min-w-0"
                        onPress={() => handleCahngeAmount("subtraction")}
                      >
                        <AiOutlineMinusCircle className="text-amber-950 text-xl" />
                      </Button>
                      {amount}
                      <Button
                        className="w-5 bg-transparent p-0 min-w-0"
                        onPress={() => handleCahngeAmount("addition")}
                      >
                        <AiOutlinePlusCircle className="text-amber-950 text-xl" />
                      </Button>
                    </div>
                  </div>
                  <p className="mt-2 font-normal text-small text-stone-900">
                    {description}
                  </p>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                className="text-red-800"
                variant="light"
                onPress={onClose}
              >
                Cancelar
              </Button>
              <Button
                color="primary"
                className="bg-amber-400 hover:bg-amber-500 text-black uppercase"
                onPress={() => {
                  handleAddOrder({ ...productSelected, amount });
                  onClose();
                }}
              >
                {edition ? "Guardar Cambios" : "Agregar"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalProduct;
