import './App.css'
import Todos from "./components/Todos"
import AddTodo from "./components/addTodo"


function App() {
  return (
    <>
      <h1 className='text-4xl font-bold text-center mb-10 mt-5'>Todo</h1>
      <AddTodo /> 
      <Todos />
    </>
  )
}

export default App
