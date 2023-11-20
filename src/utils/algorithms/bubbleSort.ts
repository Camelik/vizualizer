type Cache = [
  {
    type: string;
    values: number[][];
    currArr: number[];
    lastPosition: number[];
  }
];

// TODO ADD INIT AND END TYPE TO CACHE
export function bubbleFn(array: number[]) {
  const cache: Cache = new Array() as Cache;
  let swapCounter = array.length;

  const { length } = array;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      cache.push({
        type: "compare",
        values: [
          [array[j], j],
          [array[j + 1], j + 1],
        ],
        currArr: [...array],
        lastPosition: [],
      });
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        cache.push({
          type: "swap",
          values: [
            [array[j + 1], j + 1],
            [array[j], j],
          ],
          currArr: [...array],
          lastPosition: [],
        });
      }
    }

    swapCounter--;
    const cacheL = cache.length;
    cache[cacheL - 1].lastPosition = [swapCounter];
  }

  console.log("Using function");

  return cache;
}
