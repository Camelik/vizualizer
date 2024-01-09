export async function getConsoleLogs(
  alghType: string,
  codeLang: string
): Promise<{ code: string; steps: { [key: string]: number } }> {
  const algh = {
    bubble: "bubbleSort",
  };

  const { consoleLogsGenerator } = await import(
    `./${algh[alghType]}/consoleGenerator.ts`
  );

  return consoleLogsGenerator(codeLang);
}
