import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"

function Todos() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            {todos !== "" ? todos.map(todo => (
                <ul className="border rounded w-86 px-2 py-1">
                    <li key={todo.id} className="flex justify-between items-center gap-2">
                        <div className="mb-2">
                            {todo.text}
                        </div>
                        <button onClick={() => dispatch(removeTodo(todo.id))} className="font-bold cursor-pointer">X</button>
                    </li>
                </ul> 
            )) : alert("No tasks available")}


        </>
    )
}

export default Todos