import { useBearStore, useUserStore } from "./store/store"

export function BearCounter(){
    const bears = useBearStore(state => state.bears)
    const increasePopulation = useBearStore(state => state.increasePopulation)
    const removeAllBears = useBearStore(state => state.removeAllBears)

    const users = useUserStore(state => state.users)
    const fetchUsers = useUserStore(state => state.fetchUsers)

    return (
        <div>
            <h1>{bears}</h1>
            <button onClick={increasePopulation}>Increase bears</button>
            <button onClick={removeAllBears}>Remove bears</button>
            <div>
                <h2>Users List</h2>
                {users.length > 0 ? (
                    <ul>
                     {users.map((user)=> (
                        <li key={user.id}>{user.name}</li>
                     ))}
                    </ul>
                ):(
                    <p>No users</p>
                )}
            </div>
        </div>
    )
}