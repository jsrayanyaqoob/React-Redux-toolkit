import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice" 

function addTodos () {

    const [ input, setInput ] = useState("")
    const dispatch = useDispatch()

   

    const addTodoHandler = (e) => {

        if(input.trim() === ""){
            alert("Please enter a task")
            return  
        }

        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <>
            <form onSubmit={addTodoHandler} className="flex items-center gap-2">
                <input type="text" placeholder="Add new task" onChange={(e) => setInput(e.target.value)} value={input} className="border-b w-109 p-1" />
                <button type="submit" className="bg-black text-white rounded-sm px-3 py-1 flex items-center justify-center text-[18px] font-bold "><span className="relative bottom-[1px]">+</span></button>
            </form>     
        </>
    )
}

export default addTodos