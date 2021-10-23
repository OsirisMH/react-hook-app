import React from 'react'
import PropTypes from 'prop-types';

export const TodoListItem = React.memo(({ todo, index, handleDelete, handleToggle }) => {
    return (
        <li
            key={ todo.id }
            className="list-group-item d-fleX justify-content-between align-items-start"
        >
            <p 
                className={`${ todo.done && 'completed' }`}
                onClick={ () => handleToggle(todo.id) }
            >
                { index + 1 }. &emsp; { todo.desc }
            </p>
            <button
                className="btn btn-danger"
                onClick={ () => handleDelete(todo.id) }
            >
                Borrar
            </button>
        </li>
    )
})


TodoListItem.propTypes = {
    todo: PropTypes.object,
    index: PropTypes.number,
    handleDelete: PropTypes.func,
    handleToggle: PropTypes.func,
}