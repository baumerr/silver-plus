import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
    const { userId: userParam } = useParams();

    // if there is an id in url than QUERY_USER else QUERY_ME
    // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    //     variables: { _id: userParam },
    // });

    const token = localStorage.getItem('id_token');

    const { data } = useQuery(QUERY_ME, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    console.log(data);

    // user = QUERY_ME or QUERY_USER
    const user = data?.me || data?.user || {};
    console.log(user);

    // send back to /profile if ID is QUERY_ME
    if(Auth.loggedIn() && Auth.getProfile().data._id === userParam) {
        return <Redirect to="/profile" />;
    }

    // if(loading) {
    //     return <div>Loading...</div>
    // }

    if(!user._id) {
        return (
            <h4>
                You need to be logged in to view profiles. 
                Use the links above to login in if you have an account or signup if you don't!
            </h4>
        );
    }


    // THIS WILL BE FOR MATCHING
    // const handleClick = async () => {
    //     try {
    //         await addMatch({
    //             variables: { id: user._id },
    //         });
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    return(
        <div>
            <h4>Welcome {user.firstName}</h4>
        </div>
    )
};

export default Profile;