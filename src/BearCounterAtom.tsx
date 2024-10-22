import { useAtom } from "jotai"
import { bearsAtom, increasePopulationAtom, removeAllBearsAtom } from "./store/jotai-store"

export function BearCounterAtom(){

    const [bears] = useAtom(bearsAtom)
    const [,increasePopulation] = useAtom(increasePopulationAtom)
    const [,removeAllBears] = useAtom(removeAllBearsAtom)

    return (
        <div>
            <h1>{bears}</h1>
            <button onClick={increasePopulation}>
              Add bears
            </button>
            <button onClick={removeAllBears}>
             Remove bears
            </button>
        </div>
    )
}