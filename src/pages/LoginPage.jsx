import React from 'react';

const LoginPage = () => {
    const onSubmitForm = (e)=> {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
    }
    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <div>
                    <label htmlFor='email'>Correo</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor='password'>Contraseña</label>
                    <input type="password" name="password" />
                </div>
                <input type="submit" value="Ingresar"/>
            </form>
        </div>
    );
};

export default LoginPage;