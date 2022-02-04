import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [addUser, { error }] = useMutation(ADD_USER);

    // this updates the form based on the form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit the form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                firstName: formState.firstName,
                lastName: formState.lastName,
                email: formState.email,
                password: formState.password
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
        console.log(Auth.loggedIn);

        // try {
        //     const { data } = await addUser({
        //         variables: { ...formState },
        //     });

        //     Auth.login(data.addUser.token);
        // } catch (e) {
        //     console.error(e);
        // }
    };

    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-md-6">
                <div className="card">
                    <h4 className="card-header">Sign Up</h4>
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit}>
                            <input
                            className="form-input"
                            placeholder="Your First Name"
                            name="firstName"
                            type="firstName"
                            id="firstName"
                            value={formState.firstName}
                            onChange={handleChange}
                            />
                            <input
                            className="form-input"
                            placeholder="Your Last Name"
                            name="lastName"
                            type="lastName"
                            id="lastName"
                            value={formState.lastName}
                            onChange={handleChange}
                            />
                            <input
                            className="form-input"
                            placeholder="Your email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            />
                            <input
                            className="form-input"
                            placeholder="******"
                            name="password"
                            type="password"
                            id="password"
                            value={formState.password}
                            onChange={handleChange}
                            />
                            <button className="btn d-block w-100" type="submit">
                                Submit
                            </button>
                        </form>

                        {error && <div>Signup Failed!</div>}

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Signup;