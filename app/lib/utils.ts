export const formaterMoney = (ammount: number) => {
  return ammount.toLocaleString("en-CO", {
    style: "currency",
    currency: "COP",
  });
};
