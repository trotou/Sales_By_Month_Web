import { ChangeEvent } from "react";
import API from "../../../services";
import { SumList } from "../sumList";

export const handleBrandChange = (
  e: ChangeEvent<HTMLSelectElement>,
  setList: (arg0: any) => void,
  productValue: string
) => {
  API.get(`/products/filter_by_brand/${productValue}/${e.target.value}`).then(
    (res) => {
      setList(SumList(res));
      return;
    }
  );
};
