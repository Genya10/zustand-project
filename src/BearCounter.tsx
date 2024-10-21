import { useBearStore, useUserStore } from "./store/store"
import { useEffect } from "react"

export function BearCounter(){
    const bears = useBearStore(state => state.bears)
    const increasePopulation = useBearStore(state => state.increasePopulation)
    const removeAllBears = useBearStore(state => state.removeAllBears)

    const data = useUserStore(state => state.data)
    const fetchUsers = useUserStore(state => state.fetchUsers)

    useEffect(()=>{
      fetchUsers()
    },[fetchUsers])

    return (
        <div>
            <h1>{bears}</h1>
            <button onClick={increasePopulation}>Increase bears</button>
            <button onClick={removeAllBears}>Remove bears</button>
            <div>
                <h2>Users List</h2>
                {data.length > 0 ? (
                    <ol>
                     {data.map((todo)=> (
                        <li key={todo.id}>{todo.title}</li>
                     ))}
                    </ol>
                ):(
                    <p>No users</p>
                )}
            </div>
        </div>
    )
}