import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import { IBearStore, IUserStore } from '../types/interface'

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
  data:[],
  fetchUsers: async() =>{
    const result = await fetch('https://jsonplaceholder.typicode.com/todos?_page=3&_limit=20')
    const data = await result.json()
    set({data})
  }
}))



