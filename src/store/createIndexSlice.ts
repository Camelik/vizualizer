import { StateCreator } from "zustand";

export type IndexSlice = {
  index: number;
  setIndex: (index: number) => void;
  getIndex: () => number;
};

export const createIndexSlice: StateCreator<IndexSlice> = (set, get) => ({
  index: 0,
  setIndex: (index: number) => set({ index }),
  getIndex: () => get().index,
});
