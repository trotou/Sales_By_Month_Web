import { ChangeEvent } from "react";
import API from "../../../services";
import { SumList } from "../sumList";

export const handleCatedoryChange = (
  e: ChangeEvent<HTMLSelectElement>,
  setList: (arg0: any) => void,
  setProductSelect: (arg0: any) => void
) => {
  if (e.target.value === "food") {
    API.get("/food").then((res) => {
      setList(SumList(res));
    });

    API.get("/products/get_product/comida").then((res) => {
      setProductSelect(res.data);
    });
    return;
  }

  if (e.target.value === "clothes") {
    API.get("/clothes").then((res) => {
      setList(SumList(res));
    });

    API.get("/products/get_product/roupas").then((res) => {
      setProductSelect(res.data);
    });
    return;
  }

  API.get("/products").then((res) => {
    setList(SumList(res));

    API.get("/products/get_product").then((res) => {
      setProductSelect(res.data);
    });
    return;
  });
};
