import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name: 'Dante',
        email: 'devilmaycry@gmail.com'
    };

    test('Debe de regresar un formulario por defecto', () => {
        
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ values, handleInputChange, reset ] = result.current;

        expect( values ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {
        
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange ] = result.current;

        const event = {
            target: { 
                name: 'name',
                value: 'Osiris'
            },
        }

        act(
            () => {
                handleInputChange(event);
            }
        );

        // const [{ name }] = result.current;
        // expect( name ).toBe( 'Osiris' );
        const [ values ] = result.current;
        expect( values ).toEqual( { ...initialForm, name: 'Osiris' } );

    });

    test('Debe de re-establecer el formulario con RESET', () => {
        
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange, reset ] = result.current;

        const event = {
            target: { 
                name: 'name',
                value: 'Osiris'
            },
        }

        act(
            () => {
                handleInputChange(event);
                reset()
            }
        );

        const [ values ] = result.current;
        expect( values ).toBe( initialForm );
    });
    
});
