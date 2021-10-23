import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Testing on <TodoListItem />', () => {
    
    const todo = demoTodos[0];
    const index = 0;
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem 
            todo = { todo }
            index = { index }
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
        />
    );

    test('should render correctly', () => {
        //snapshot
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should call the handleDelete function', () => {
        //jest.fn()
        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( todo.id );

    });
    
    test('should call handleToggle function', () => {
        //jest.fn()
        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( todo.id );

    });
    
    test('should render the text correctly', () => {

        const todoText = wrapper.find('p').text().trim();
        expect( todoText ).toBe( `${index + 1}. \u2003 ${todo.desc}` );

    });
    
    test('should has completed class if TODO.done = true', () => {
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem 
                todo = { todo }
            />
        );

        expect( wrapper.find('p').hasClass('completed') ).toBe( true );
    });
    
});
