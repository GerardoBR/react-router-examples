import React, { useContext }  from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);
    // console.log(dispatch);
    
    const handleClick =()=>{
        // history.push('/'); // redirecciona a la ruta pero dejando historia
        // history.replace('/'); // remplaza la ruta anterior por el /
        const lastPath = localStorage.getItem('lastPath') ||  '/';
        dispatch({
            type : types.login,
            payload : {
                name : 'Gerardo',
            }
        })
         history.replace(lastPath);
    }
    return (
        <div className = "container mt-5">
            <h1>Login Screen</h1>
            <hr/>
            <button  className="btn btn-warning" onClick= { handleClick}> Login </button>
        </div>
    )
}
