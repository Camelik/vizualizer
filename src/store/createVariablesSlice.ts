import { StateCreator } from "zustand";

export type VariablesSlice = {
  speed: number;
  setSpeed: (speed: number) => void;
  isPaused: boolean;
  setIsPaused: (isPaused: boolean) => void;
  getIsPaused: () => boolean;
  isFinished: boolean;
  isAnimated: boolean;
  setIsAnimated: (isAnimated: boolean) => void;
  getIsAnimated: () => boolean;
  setIsFinished: (isFinished: boolean) => void;
  animationCycles: number;
  setAnimationCycles: (animationCycles: number) => void;
  getAnimationCycles: () => number;
};

export const createVariablesSlice: StateCreator<VariablesSlice> = (
  set,
  get
) => ({
  speed: 120,
  setSpeed: (speed: number) => set({ speed }),
  isPaused: true,
  setIsPaused: (isPaused: boolean) => set({ isPaused }),
  getIsPaused: () => get().isPaused,
  isFinished: false,
  isAnimated: false,
  setIsAnimated: (isAnimated: boolean) => set({ isAnimated }),
  getIsAnimated: () => get().isAnimated,
  setIsFinished: (isFinished: boolean) => set({ isFinished }),
  animationCycles: 0,
  setAnimationCycles: (animationCycles: number) => set({ animationCycles }),
  getAnimationCycles: () => get().animationCycles,
});
