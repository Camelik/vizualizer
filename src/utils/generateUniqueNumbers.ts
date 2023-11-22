export const generateUniqueNumbers = (length: number) => {
  const uniqueNumbers = new Set<number>();
  const range = 101;

  while (uniqueNumbers.size < length) {
    uniqueNumbers.add(Math.floor(Math.random() * range));
  }

  return Array.from(uniqueNumbers);
};
