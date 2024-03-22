import { useState } from "react";
import PropTypes from "prop-types";

export default function Item({ todo, deleteTodo, updateTodo }) {

    const [editMode, setEditMode] = useState(false);

    function updateStatus() {
        todo.status = ! todo.status;
        updateTodo(todo);
    } 

    function updateTitle() {
        updateTodo(todo);
        setEditMode(false);
    }
    
    function remove() {
        if (confirm(`Are you sure to delete "${todo.title}" task?`)){
            deleteTodo(todo);                       
        }
    }

    return (

        <li className="p-2 rounded-lg">
            <label className="flex">
                <div className="mr-2">
                    <input type="checkbox" className="h-6 w-6" checked={todo.status}
                        onChange={() => updateStatus()} />
                </div>
                <div className="w-full text-center">
                {
                editMode 
                    ? 
                    <input type="text" className="px-2 text-lg w-80 border-b-2 border-gray-500 text-black" 
                        defaultValue={todo.title} onChange={(e) => todo.title = e.target.value}/>
                    :
                    <p className={`text-lg ${todo.status ? 'line-through text-gray-400' : 'text-black'}`}>
                        {todo.title}
                    </p>
                }
                </div>
                {
                editMode 
                    ?
                    <button className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white
                    hover:bg-green-500 rounded-lg flex" onClick={() => updateTitle()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </button>
                    :
                    <button className="ml-2 border-2 border-blue-500 p-2 text-blue-500 hover:text-white hover:bg-blue-500 rounded-lg flex" onClick={() => setEditMode(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </button>
                }
                <button 
                    className="ml-2 border-2 border-red-500 p-2 text-red-500 hover:text-white hover:bg-red-500 rounded-lg flex"
                    onClick={() => remove()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </label>
            <hr className="mt-2"/>
        </li>
    )
}
Item.propTypes = {
    todo: PropTypes.object,
    deleteTodo: PropTypes.func,
    updateTodo: PropTypes.func
}