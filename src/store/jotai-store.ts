import { atom } from "jotai"

export const bearsAtom = atom<number>(0)

export const increasePopulationAtom = atom(null,(get,set)=>{
    set(bearsAtom, get(bearsAtom)+1)
})

export const removeAllBearsAtom = atom(null,(_,set)=> {
    set(bearsAtom,0)
})