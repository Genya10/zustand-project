import { atom } from "jotai"

export const todoListAtom = atom([
    {
        id:1,
        text:'Eat breakfast',
        isCompleted: false
    }
])

export const filterAtom = atom('all')

export const filteredTodoListAtom = atom(get => {
    const filter = get(filterAtom)
    const list = get(todoListAtom)

    switch(filter){
        case 'completed':
            return list.filter(todo => todo.isCompleted)
        case 'active':
            return list.filter(todo => !todo.isCompleted)
        default:
            return list
    }
})