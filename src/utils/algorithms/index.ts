import { bubbleFn } from "./bubbleSort";
import { mergeFn } from "./mergeSort";
import { quickFn } from "./quickSort";

export const getSortingCache = (
  data: number[],
  alghType: "bubble" | "sort" | "quick",
  sortOrder: "ASC" | "DESC" = "ASC"
) => {
  const alghFn = {
    bubble: bubbleFn,
    sort: mergeFn,
    quick: quickFn,
  };

  return alghFn[alghType](data, sortOrder);
};
