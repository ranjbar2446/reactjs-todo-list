import Item from "./Item";
import PropTypes from "prop-types";

export default function List({ todos, deleteTodo, updateTodo}) {

    return (
        <div className="mt-8">
            <ul>
            { 
                todos.map((todo, index) => 
                    <Item key={index} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                ) 
            }
            </ul>
        </div>
    )
}

List.propTypes = {
    todos: PropTypes.array,
    deleteTodo: PropTypes.func,
    updateTodo: PropTypes.func,
}