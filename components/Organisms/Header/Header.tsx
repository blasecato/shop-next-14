import React from "react";
import { Button } from "@nextui-org/react";

const Header = () => {
  const steps = [
    // { id: 1, name: "Home", url: "/" },
    { id: 1, name: "Tienda", url: "/store" },
    { id: 2, name: "Resumen", url: "/summary" },
    { id: 3, name: "Total", url: "/total" },
  ];
  return (
    <>
      <div className="flex justify-between mb-3 gap-5 items-center">
        {steps.map((step) => (
          <Button className="text-2xl font-bold" key={step.id}>
            {step.name}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Header;
