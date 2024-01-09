"use client";

import { useDataLogic } from "@/store/dataLogicStore";
import { getConsoleLogs } from "@/utils/algorithms/getConsoleLogs";
import { cn } from "@/utils/cn";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface SortingResult {
  code: string;
  steps: { [key: string]: number };
}

function Logs({ data }) {
  const params = useSearchParams();
  const codeLang = params.get("code") as string;
  const alghType = params.get("algh") as string;

  const [consoleObj, setConsoleObj] = useState<SortingResult>({
    code: "",
    steps: {},
  });

  const { getIndex } = useDataLogic();

  const index = getIndex();

  useEffect(() => {
    const fetchConsoleLogs = async () => {
      try {
        const logs = await getConsoleLogs(alghType, codeLang);
        setConsoleObj(logs);
      } catch (error) {
        console.error("Error fetching console logs:", error);
      }
    };

    fetchConsoleLogs();
  }, []);

  const type = data.steps[index].type;

  const highlightedLine = consoleObj.steps[type];

  return (
    <div className="my-[20px]">
      <pre>
        <code className="javascript flex flex-col items-start">
          {consoleObj.code.split("\n").map((line, index) => (
            <div
              key={index}
              className={cn(
                highlightedLine === index
                  ? "dark:bg-[#584946] bg-[#ECDBD7]"
                  : null
              )}
            >
              {line}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
export default Logs;
