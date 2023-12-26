import React from "react";
import useMenuProducts from "@/hooks/useMenuProducts";
import { formaterMoney } from "@/app/lib/utils";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";

const ModalProduct = () => {
  const {
    handleChangeModal,
    isModalOpen,
    modalPlacement,
    productSelected,
  }: any = useMenuProducts();
  const { name, description, image, price } = productSelected;
  return (
    <Modal
      placement={modalPlacement}
      isOpen={isModalOpen}
      onClose={handleChangeModal}
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
                  <p className="mt-3 font-black text-3xl text-amber-500">
                    {formaterMoney(price)}
                  </p>
                  <p className="mt-2 font-normal text-small text-stone-900">
                    {description}
                  </p>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalProduct;
