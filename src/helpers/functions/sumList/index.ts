export const SumList = (res: any) => {
  let sum_arr = res.data.map((item: any) => {
    return item.spend_by_month;
  });

  let result = sum_arr.reduce(
    (r: { [x: string]: any }, a: any[]) => a.map((b, i) => (r[i] || 0) + b),
    []
  );

  return result;
};
