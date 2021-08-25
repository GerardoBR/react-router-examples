import React from 'react'

export const LoginScreen = ({ history }) => {
    const handleClick =()=>{
        // history.push('/'); // redirecciona a la ruta pero dejando historia
        history.replace('/'); // remplaza la ruta anterior por el /
    }
    return (
        <div className = "container mt-5">
            <h1>Login Screen</h1>
            <hr/>
            <button  className="btn btn-warning" onClick= { handleClick}> Login </button>
        </div>
    )
}
