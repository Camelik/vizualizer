import { create } from "zustand";
import { devtools } from "zustand/middleware";

type DataLogicStore = {
  index: number;
  setIndex: (index: number) => void;
  speed: number;
  setSpeed: (speed: number) => void;
  isPaused: boolean;
  setIsPaused: (isPaused: boolean) => void;
  highLightArr: number[];
  setHighLightArr: (highLightArr: number[]) => void;
  lastPositionArr: number[];
  setLastPositionArr: (lastPositionArr: number[]) => void;
  isFinished: boolean;
  setIsFinished: (isFinished: boolean) => void;
  animationCycles: number;
  setAnimationCycles: (animationCycles: number) => void;
  cleanUp: () => void;
};

export const useDataLogic = create<DataLogicStore>()(
  devtools((set) => ({
    index: 0,
    setIndex: (index: number) => set({ index }),
    speed: 110,
    setSpeed: (speed: number) => set({ speed }),
    isPaused: true,
    setIsPaused: (isPaused: boolean) => set({ isPaused }),
    highLightArr: [],
    setHighLightArr: (highLightArr: number[]) => set({ highLightArr }),
    lastPositionArr: [],
    setLastPositionArr: (lastPositionArr: number[]) => set({ lastPositionArr }),
    isFinished: false,
    setIsFinished: (isFinished: boolean) => set({ isFinished }),
    animationCycles: 0,
    setAnimationCycles: (animationCycles: number) => set({ animationCycles }),
    cleanUp: () =>
      set({
        index: 0,
        animationCycles: 0,
        isPaused: true,
        isFinished: false,
        highLightArr: [],
        lastPositionArr: [],
      }),
  }))
);
