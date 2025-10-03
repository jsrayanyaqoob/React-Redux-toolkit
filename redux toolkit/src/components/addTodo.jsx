import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice" 

function addTodos () {

    const [ input, setInput ] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <>
            <form onSubmit={addTodoHandler}>
                <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
            </form>
        </>
    )
}

export default addTodos