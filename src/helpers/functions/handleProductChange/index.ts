import { ChangeEvent } from "react";
import API from "../../../services";
import { SumList } from "../sumList";

export const handleProductChange = (
  e: ChangeEvent<HTMLSelectElement>,
  setList: (arg0: any) => void,
  setBrandSelect: (arg0: any) => void,
  setProductValue: (arg0: any) => void
) => {
  if (e.target.value === "comida") {
    API.get("/food/comidas").then((res) => {
      setList(SumList(res));
    });

    setProductValue("comida");

    API.get("/products/get_brands/comida").then((res) => {
      setBrandSelect(res.data);
    });
    return;
  }

  if (e.target.value === "bebidas") {
    API.get("/food/bebidas").then((res) => {
      setList(SumList(res));
    });

    setProductValue("bebidas");

    API.get("/products/get_brands/bebidas").then((res) => {
      setBrandSelect(res.data);
    });
    return;
  }

  if (e.target.value === "roupas") {
    API.get("/clothes/roupas").then((res) => {
      setList(SumList(res));
    });

    setProductValue("roupas");

    API.get("/products/get_brands/roupas").then((res) => {
      setBrandSelect(res.data);
    });
    return;
  }

  if (e.target.value === "acessorios") {
    API.get("/clothes/acessorios").then((res) => {
      setList(SumList(res));
    });

    setProductValue("acessorios");

    API.get("/products/get_brands/acessorios").then((res) => {
      setBrandSelect(res.data);
    });
    return;
  }

  API.get("/products").then((res) => {
    setList(SumList(res));

    setProductValue("");

    API.get("/products/get_brands").then((res) => {
      setBrandSelect(res.data);
    });
    return;
  });
};
