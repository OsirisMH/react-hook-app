import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = React.memo(({ handleAddTodo }) => {
    const [ { description }, handleInputChange, reset ] = useForm({
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length <= 1 ){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };


        handleAddTodo( newTodo );
        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form
                className="d-grid gap-2"
                onSubmit={ handleSubmit }
            >
                <input
                    autoComplete="off"
                    className="form-control"
                    name="description"
                    placeholder="Aprender..."
                    type="text"
                    value={ description }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-sm"
                >
                    Agregar
                </button>
            </form>   
        </>
    )
});