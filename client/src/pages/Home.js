import React from 'react';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';

const Home = () => {
    const { loading, data } = useQuery();
    const { }

    const loggedIn = Auth.loggedIn();

    return (
        <main>
            <div className='flex-row justify-space-between'>
                {loggedIn && (
                    <div className='col-12 mb-3'>
                        <Messages />
                    </div>
                )}
            </div>
        </main>
    )

}