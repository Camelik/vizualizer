export type Cache = {
  array: number[];
  steps: {
    [key: number]: {
      type: string;
      values: number[][];
      currArr: number[];
      lastPosition: number[];
    };
  };
};

export function bubbleFn(array: number[], sortOrder: "ASC" | "DESC") {
  const cache: Cache = { array: [...array], steps: {} };
  let stepCounter = 1;
  let swapCounter = array.length;

  const clonedArray = [...array];

  const { length } = clonedArray;

  cache.steps[0] = {
    type: "init",
    values: [],
    currArr: [...clonedArray],
    lastPosition: [],
  };

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      cache.steps[stepCounter++] = {
        type: "compare",
        values: [
          [clonedArray[j], array.indexOf(clonedArray[j])],
          [clonedArray[j + 1], array.indexOf(clonedArray[j + 1])],
        ],
        currArr: [...clonedArray],
        lastPosition: [],
      };

      const shouldSwap =
        sortOrder === "ASC"
          ? clonedArray[j] > clonedArray[j + 1]
          : clonedArray[j] < clonedArray[j + 1];

      if (shouldSwap) {
        const temp = clonedArray[j];
        clonedArray[j] = clonedArray[j + 1];
        clonedArray[j + 1] = temp;

        cache.steps[stepCounter++] = {
          type: "swap",
          values: [
            [clonedArray[j + 1], array.indexOf(clonedArray[j + 1])],
            [clonedArray[j], array.indexOf(clonedArray[j])],
          ],
          currArr: [...clonedArray],
          lastPosition: [],
        };
      }
    }

    swapCounter--;
    cache.steps[stepCounter - 1].lastPosition = [swapCounter];
  }

  cache.steps[stepCounter++] = {
    type: "end",
    values: [],
    currArr: [...clonedArray],
    lastPosition: [],
  };

  console.log("Using function");

  return cache;
}
