import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { HookApp } from "../HookApp";

describe('Pruebas sobre <HookApp /', () => {
    
    test('Debe de renderiza correctamente el componente', () => {
            const wrapper = shallow(<HookApp />);

            expect( wrapper ).toMatchSnapshot();
    });
});
