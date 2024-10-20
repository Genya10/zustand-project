import {create} from 'zustand'
import {persist} from 'zustand/middleware'

interface IBearStore {
    bears: number
    increasePopulation:()=> void
    removeAllBears:()=> void
}

interface IUser {
    id:number
    name: string
    email: string
}
interface IUserStore {
    users:IUser[]
    fetchUsers:() => Promise<void>
}

/*export const useBearStore = create<IBearStore>(set=>({
  bears:0,
  increasePopulation:()=> set(state => ({bears: state.bears + 1})),
  removeAllBears:()=> set({bears:0})
}))*/

export const useBearStore = create<IBearStore>()(
persist(
  set=>({
    bears:0,
    increasePopulation:()=> set(state => ({bears: state.bears + 1})),
    removeAllBears:()=> set({bears:0}),
  }),
{
    name:'bear-storage',
})
)

export const useUserStore = create<IUserStore>(set => ({
    users:[],
    fetchUsers: async()=> {
        const res = await fetch('https://jsonplaceholder.typecode.com/users')
        const users = await res.json()
        set({users})
    }
}))