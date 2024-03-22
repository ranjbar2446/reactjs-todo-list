import { useState } from "react";
import Create from "./Create";
import List from "./List";
import './index.css';

export default function Index() {

    const [todos, setTodos] = useState([{
        id: 1,
        title: 'Wake up early',
        status: true
    },{
        id: 2,
        title: 'Check Email',
        status: false 
    }]);

    const createTodo = (title) => {
        let newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
        setTodos(todos.concat({
            id: newId,
            title: title,
            status: false,
        }));
    }

    function deleteTodo(todo) {
        let newTodos = todos.filter((item) => {
            return item.id != todo.id;
        });
        setTodos(newTodos);
    }

    function updateTodo(todo) {
        const newTodos = todos.map((item) => {
            if (todo.id === item.id){
                return todo;
            }
            return item;
        });
        setTodos(newTodos);
    }

    const clearCompletedTodo = () => {
        if (! confirm('Are you sure to delete all completed todos?')){
            return;
        }
        const newTodos = todos.filter((item) => {
            return item.status ? null : item;
        });
        setTodos(newTodos);
    }

    function resetTodos() {
        if (! confirm('Are you sure to delete all todos?')){
            return;
        }
        setTodos([]);
    }

    return (      
        <div className="w-full pt-20">
            <div className="bg-white p-5 max-w-lg mx-auto shadow-2xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">ToDo App</h1>
                    <Create createTodo={createTodo} />
                </div>
                <List todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                <div className="mt-8 flex justify-center">
                    <button onClick={clearCompletedTodo} 
                        className="border-2 border-green-500 p-2 text-green-500">
                            Clear Completed Tasks
                    </button>
                    <button onClick={resetTodos}
                        className="border-2 border-red-500 p-2 text-red-500 ml-4">
                            Reset Todo List
                    </button>
                </div>
            </div>    
        </div>
    )
}