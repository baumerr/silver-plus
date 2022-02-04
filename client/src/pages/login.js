import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    // this updates the state based on form the input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
        ...formState,
        [name]: value,    
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password }
            });
            console.log('hello')
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch(e) {
            console.log(e);
            console.log(error);
        }

        // try {
        //     const { data } = await login({
        //         variables: { ...formState },
        //     });

        //     Auth.login(data.login.token);
        // } catch (e) {
        //     console.error(e);
        // }

        // clear the form values
        // setFormState({
        //     email: "",
        //     password: "",
        // });
    };

    return (
        < main className='flex-row justify-center mb-4'>
            <div className='col-12 col-md-6'>
                <div className='card'>
                    <h4 className='card-header'>Login</h4>
                    <div className='card-body'>
                        <form onSubmit={handleFormSubmit}>
                            <input
                            className='form-input'
                            placeholder='Your email'
                            name='email'
                            type='email'
                            id='email'
                            // value={formState.email}
                            onChange={handleChange}
                            />
                            <input
                            className='form-input'
                            placeholder='*******'
                            name='password'
                            type='password'
                            id='password'
                            // value={formState.password}
                            onChange={handleChange}
                            />
                            <button className='btn d-block w-100' type='submit'>
                                Submit
                            </button>
                        </form>
                        { error && <div>Login failed</div>}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;