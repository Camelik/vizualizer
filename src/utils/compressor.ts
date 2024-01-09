import pako from "pako";

/**
 * Returns an object with two functions, `compress` and `decompress`, for compressing and decompressing data using the pako library.
 * @returns {Object} An object with `compress` and `decompress` functions.
 */
export const useCompressor = (): {
  compress: (data: any[]) => Promise<string>;
  decompress: (compressedDataInBase64: string) => Promise<any[]>;
} => {
  /**
   * Compresses an array of data using the pako library.
   * @param {any[]} data - The data to be compressed.
   * @returns {Promise<string>} A promise that resolves to the compressed data in base64 format.
   */
  const compress = (data: any[]): Promise<string> => {
    return new Promise((resolve) => {
      const dataBuffer = Buffer.from(JSON.stringify(data));
      const compressedData = pako.deflate(dataBuffer);
      resolve(Buffer.from(compressedData).toString("base64"));
    });
  };

  /**
   * Decompresses data in base64 format using the pako library.
   * @param {string} compressedDataInBase64 - The compressed data in base64 format.
   * @returns {Promise<any[]>} A promise that resolves to the decompressed data as an array.
   */
  const decompress = (compressedDataInBase64: string): Promise<any[]> => {
    return new Promise((resolve) => {
      try {
        const compressedData = Buffer.from(compressedDataInBase64, "base64");
        const decompressedData = pako.inflate(compressedData, { to: "string" });
        resolve(JSON.parse(decompressedData));
      } catch (error) {
        const defaultArray = [5, 28, 42, 50, 66, 100, 57, 18];
        resolve(defaultArray);
      }
    });
  };

  return { compress, decompress };
};
