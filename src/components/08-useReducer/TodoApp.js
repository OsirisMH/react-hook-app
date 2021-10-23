import React, { useCallback, useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

};

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect( () => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
    }, [ todos ]);

    const handleDelete = useCallback(( todoId ) => {

        const action = {
            type: 'delete',
            payload: todoId,
        };

        dispatch( action );

    }, [dispatch]);

    const handleToggle = useCallback(( todoId ) => {

        dispatch({
            type: 'toggle',
            payload: todoId,
        });

    }, [dispatch]);
    
    const handleAddTodo = useCallback(( newTodo ) => {

        dispatch({
            type: 'add',
            payload: newTodo,
        });

    }, [dispatch]);


    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />

            <div className="row">
                <div className="col-7 mt-1">
                    <TodoList 
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                </div>

                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
            </div>
        </div>
    )
}

TodoList.displayName = 'TodoList';
