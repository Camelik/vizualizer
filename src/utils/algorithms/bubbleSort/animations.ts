import gsap from "gsap";
import { RefObject } from "react";

const getSpanProps = (
  index: number,
  references: RefObject<HTMLSpanElement>[]
) => {
  const span = references[index].current;
  const rect = span!.getBoundingClientRect();
  const x = gsap.getProperty(span, "x") || 0;

  return { span, rect, x };
};

export function init() {
  return console.log("init");
}

export function swap(
  valueToSwap: [number, number],
  valueWithToSwap: [number, number],
  references: RefObject<HTMLSpanElement>[]
) {
  const firstSpanProps = getSpanProps(valueToSwap[1], references);
  const secondSpanProps = getSpanProps(valueWithToSwap[1], references);

  const timeline = gsap.timeline();

  timeline.to(firstSpanProps.span, {
    x:
      Number(firstSpanProps.x) +
      (secondSpanProps.rect.left - firstSpanProps.rect.left),
  });

  timeline.to(
    secondSpanProps.span,
    {
      x:
        Number(secondSpanProps.x) +
        (firstSpanProps.rect.left - secondSpanProps.rect.left),
    },
    0
  );

  return timeline;
}

export function compare() {
  return console.log("compare");
}
