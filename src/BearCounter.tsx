import { useBearStore } from "./store/store"

export function BearCounter(){
    const bears = useBearStore(state => state.bears)
    const increasePopulation = useBearStore(state => state.increasePopulation)
    const removeAllBears = useBearStore(state => state.removeAllBears)

    return (
        <div>
            <h1>{bears}</h1>
            <button onClick={increasePopulation}>Increase bears</button>
            <button onClick={removeAllBears}>Remove bears</button>
        </div>
    )
}