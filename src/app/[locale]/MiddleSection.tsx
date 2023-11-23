import CodeDisplayer from "@/components/code-display/CodeDisplayer";
import DataDisplayerControls from "@/components/data-display/DataControlsDisplayer";
import DataDisplayer from "@/components/data-display/DataDisplayer";
import { getSortingCache } from "@/utils/algorithms";
import { useCompressor } from "@/utils/compressor";

async function MiddleSection({ searchParams }) {
  const { data, algh, sort } = searchParams;
  const { decompress } = useCompressor();

  const decompressedData = await decompress(data);

  const cache = getSortingCache(decompressedData, algh, sort);

  return (
    <section>
      <div className="flex justify-center px-[50px]">
        <div className="mr-auto w-[440px] max-w-[440px] invisible"></div>
        <DataDisplayer data={cache}></DataDisplayer>
        <CodeDisplayer></CodeDisplayer>
      </div>
      <div className="flex justify-center mt-[150px]">
        <DataDisplayerControls data={cache}></DataDisplayerControls>
      </div>
    </section>
  );
}

export default MiddleSection;
