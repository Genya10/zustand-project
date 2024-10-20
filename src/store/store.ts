import {create} from 'zustand'

interface IBearStore {
    bears: number
    increasePopulation:()=> void
    removeAllBears:()=> void
}

export const useBearStore = create<IBearStore>(set=>({
  bears:0,
  increasePopulation:()=> set(state => ({bears: state.bears + 1})),
  removeAllBears:()=> set({bears:0})
}))