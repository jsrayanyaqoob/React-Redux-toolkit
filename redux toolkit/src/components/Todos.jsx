import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"

function Todos() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    return (
        <div className="flex flex-col gap-2 mt-3">
            {todos.length > 0 ? todos.map(todo => (
                <ul key={todo.id} className="border rounded w-120 px-3 py-2">
                    <li className="flex justify-between items-center gap-2">
                        <div>{todo.text}</div>
                        <button onClick={() => dispatch(removeTodo(todo.id))} className="font-bold cursor-pointer text-red-500">X</button>
                    </li>
                </ul>
            )) : <p className="text-gray-500">No tasks available</p>}
        </div>
    )
}

export default Todos