import { useState } from "react";
import PropTypes from "prop-types";

export default function Create({ createTodo }) {

    const [title, setTitle] = useState('');

    function addTodo() {
        if (title == ''){
            return;
        }
        createTodo(title);
        setTitle('');
    }

    return (
        <div className="mt-8 flex">
            <input type="text" placeholder="Enter your task here" className="px-2 w-80 border-b-2 border-gray-500 text-black"
                onChange={(e) => setTitle(e.target.value)} value={title} />
            <button className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white
                hover:bg-green-500 rounded-lg flex" onClick={() => addTodo()}>   
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>        
    );
}

Create.propTypes = {
    createTodo: PropTypes.func
}