import { StateCreator } from "zustand";

export type ArraysSlice = {
  highLightArr: number[];
  setHighLightArr: (highLightArr: number[]) => void;
  lastPositionArr: number[];
  setLastPositionArr: (lastPositionArr: number[]) => void;
  getLastPositionArr: () => number[];
};

export const createArraysSlice: StateCreator<ArraysSlice> = (set, get) => ({
  highLightArr: [],
  setHighLightArr: (highLightArr: number[]) => set({ highLightArr }),
  lastPositionArr: [],
  setLastPositionArr: (lastPositionArr: number[]) => set({ lastPositionArr }),
  getLastPositionArr: () => get().lastPositionArr,
});
