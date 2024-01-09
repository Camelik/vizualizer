import { RefObject } from "react";

export async function runAnimation(
  animationStep: any,
  references: RefObject<HTMLSpanElement>[],
  alghType: string
) {
  const animationModule = await import(`./${alghType}/animations.ts`);

  if (
    animationModule &&
    typeof animationModule[animationStep.type] === "function"
  ) {
    // Wywołanie funkcji z modułu
    return animationModule[animationStep.type](
      ...animationStep.values,
      references
    );
  } else {
    console.error(`Function ${animationStep.type} not found in module`);
  }
}
