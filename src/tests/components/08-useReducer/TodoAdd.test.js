import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe('Pruebas en <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo = { handleAddTodo }
        />
    );

    test('Debe renderizar el componente correctamente', () => {
       
        expect( wrapper ).toMatchSnapshot();

    });

    test('No debe llamar handleAddTodo', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });
        
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
        
    });
    
    test('Debe llamar handleAddTodo con un argumento', () => {
        //React Memo
        const wrapper = shallow(
            <TodoAdd
                handleAddTodo = { handleAddTodo }
            />
        );
        
        const value = 'Aprender LO QUE SEA';

        wrapper.find('input').simulate('change', { target: { value, name: 'description' }});

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalled();
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        });

        expect( wrapper.find('input').prop('value') ).toBe('');
    });
    
});
