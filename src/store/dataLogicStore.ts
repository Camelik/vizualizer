import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ArraysSlice, createArraysSlice } from "./createArraysSlice";
import { VariablesSlice, createVariablesSlice } from "./createVariablesSlice";
import { IndexSlice, createIndexSlice } from "./createIndexSlice";

type DataLogicStore = {
  cleanUp: () => void;
  getNewestValues: () => {
    index: number;
    animationCycles: number;
    isPaused: boolean;
    lastPositionArr: number[];
  };
};

export const useDataLogic = create<
  DataLogicStore & ArraysSlice & VariablesSlice & IndexSlice
>()(
  devtools((set, get, _) => ({
    ...createIndexSlice(set, get, _),
    ...createVariablesSlice(set, get, _),
    ...createArraysSlice(set, get, _),
    getNewestValues: () => ({
      index: get().index,
      animationCycles: get().animationCycles,
      isPaused: get().isPaused,
      lastPositionArr: get().lastPositionArr,
    }),
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
