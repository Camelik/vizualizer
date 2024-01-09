import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCompressor } from "@/utils/compressor";
import { generateUniqueNumbers } from "@/utils/generateUniqueNumbers";
import { getQueryString } from "@/utils/getQueryString";
import { SearchParams } from "@/types/searchparams";
import { useDataLogic } from "@/store/dataLogicStore";

function useRandomizer(searchParams: SearchParams) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState(1);
  const { cleanUp } = useDataLogic();

  const { sort, data } = searchParams;
  const queryString = getQueryString(searchParams);

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(+e.target.value);
  };

  const onRandomClick = async () => {
    const limit = Math.min(Math.max(1, inputValue), 33);
    const uniqueNumbers = generateUniqueNumbers(limit);

    const compressedUniqueNumbers = await useCompressor().compress(
      uniqueNumbers
    );

    let modifiedDataString = queryString.replace(
      `data=${encodeURIComponent(data)}`,
      `data=${encodeURIComponent(compressedUniqueNumbers)}`
    );

    cleanUp();
    router.push(`en?${modifiedDataString}`);
  };

  return { inputValue, sort, queryString, changeInputValue, onRandomClick };
}

export default useRandomizer;
