import pako from "pako";

// Function to compress data returning a Promise
export const useCompressor = () => {
  const compress = (data: any[]): Promise<string> => {
    return new Promise((resolve, reject) => {
      const dataBuffer = Buffer.from(JSON.stringify(data));
      const compressedData = pako.deflate(dataBuffer, { to: "string" });
      resolve(Buffer.from(compressedData).toString("base64"));
    });
  };

  const decompress = (compressedDataInBase64: string): Promise<any[]> => {
    return new Promise((resolve, reject) => {
      const compressedData = Buffer.from(compressedDataInBase64, "base64");
      const decompressedData = pako.inflate(compressedData, { to: "string" });
      resolve(JSON.parse(decompressedData));
    });
  };

  return { compress, decompress };
};
