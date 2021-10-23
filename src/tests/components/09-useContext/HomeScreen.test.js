const { mount } = require("enzyme");
const { HomeScreen } = require("../../../components/09-useContext/HomeScreen");
const { default: UserContext } = require("../../../components/09-useContext/UserContext");

describe('Pruebas en <HomeScreen />', () => {
   
    const user = {
        name:'Tuntancamon',
        email:'elmergo@gmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
       
        expect( wrapper ).toMatchSnapshot();
        
    });

});
