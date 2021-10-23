import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks />', () => {

    beforeEach(() => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {},
        });
    })
    
    test('Debe mostrarse correctamente', () => {
       
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });

        const wrapper = shallow( <MultipleCustomHooks /> );
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('Debe mostrar la información', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Alejandro',
                quote: 'Kiuboles vergas'
            }],
            loading: false,
            error: null,
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('blockquote p').text().trim() ).toBe( 'Kiuboles vergas' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'Alejandro' );

    })
    

});
