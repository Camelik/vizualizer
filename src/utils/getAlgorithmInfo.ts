export function getAlgorithmInfo(algh: string | undefined) {
  algh ??= "bubble";

  const alghMappings: { [key: string]: string } = {
    bubble: "Bubble Sort",
    merge: "Merge Sort",
    quick: "Quick Sort",
  };

  const allAlgorithms = Object.values(alghMappings);
  const selectedAlgorithm = alghMappings[algh] || alghMappings["bubble"];

  return { allAlgorithms, selectedAlgorithm };
}
