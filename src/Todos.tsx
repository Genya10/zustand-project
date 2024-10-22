import { useAtom, useAtomValue } from "jotai"
import { filterAtom, filteredTodoListAtom, todoListAtom } from "./store/jotai-store-todo"
import icon from './assets/icon1.jpg'

export function Todos(){
    const [todoList, setTodoList] = useAtom(todoListAtom)
    const [filter, setFilter] = useAtom(filterAtom)
    const filteredTodoList = useAtomValue(filteredTodoListAtom)

   const addTodo = () => {
    const text = prompt('What needs to be done?') || ''
    setTodoList([...todoList, {id:Date.now(), text, isCompleted:
        false
    }])
   }

   const toggleTodo = (id:number) => {
    setTodoList(
        todoList.map(todo => {
            if(todo.id === id){
                return {...todo, isCompleted:!todo.isCompleted}
            }
            return todo
        })
    )
   }

   return (
    <div>
        <h1>TODOS:</h1>
        <button onClick={addTodo}
                style={{marginRight:'15px'}}>
            Add todo
        </button>
        <select
           value={filter}
           onChange={e => setFilter(e.target.value)}
        >
            <option value='all'></option>
            <option value='active'></option>
            <option value='completed'></option>
        </select>
        <ul>
            {filteredTodoList.map(todo => (
                <li key={todo.id}
                    onClick={() => toggleTodo(todo.id)}
        >
            {todo.isCompleted ?
             <img src={icon} alt='completed' width='20'
                  style={{marginRight:'8px', borderRadius:'8px'}} /> 
             : ''}
            {todo.text}
                </li>
            ))}
        </ul>
    </div>
   )
}