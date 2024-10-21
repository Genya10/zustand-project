export interface IBearStore {
    bears: number
    increasePopulation:()=> void
    removeAllBears:()=> void
}

interface IUser {
    id:number
    title: string
}

export interface IUserStore {
    data:IUser[]
    fetchUsers:() => Promise<void>
}