import fs from "fs";
import path from "path";

function getFilenamesFromFolder(folderPath: string): string[] {
  try {
    return fs
      .readdirSync(folderPath)
      .map((filename) => path.parse(filename).name);
  } catch (error) {
    console.error(`Error reading files from ${folderPath}: ${error}`);
    return [];
  }
}

export const getAvailableLocales = (): string[] => {
  const localesFolder = path.join(process.cwd(), "messages");

  return getFilenamesFromFolder(localesFolder);
};
