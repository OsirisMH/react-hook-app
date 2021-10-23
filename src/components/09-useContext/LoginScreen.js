import React, { useContext } from 'react';
import UserContext from './UserContext';

export const LoginScreen = () => {

    const { setUser } = useContext( UserContext );

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ () => setUser(
                    {
                        id: "ns3jsdo3v_Er",
                        name: "Osiris Meza",
                        email: "oamh09@gmail.com"
                    }
                )}
            >
                Login
            </button>
        </div>
    )
}
