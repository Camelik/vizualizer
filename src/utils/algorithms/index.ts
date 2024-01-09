// import { bubbleFn } from "./bubbleSort";
import { bubbleFn } from "./bubbleSort/stepsGenerator";
import { mergeFn } from "./mergeSort/stepsGenerator";
import { quickFn } from "./quickSort/stepsGenerator";

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
