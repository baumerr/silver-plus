import decode from 'jwt-decode';

class AuthService {
    //this retrieves the data saved in the token
    getProfile() {
        return decode(this.getToken());
    }

    // checks to see if the user is still logged in
    loggedIn() {
        // checks to see if there is still a saved token and that it is still valid
        const token = this.getToken();
        // use type coersion to check if the token is not undefined and the token is not expired
        return !!token && !this.isTokenExpired(token);
    }

    // check to see if the token has expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }

    // retrieves the token from local storage
    getToken() {
        return localStorage.getItem('id_token');
    }

    // sets the token local storage and reloads the page to homepage
    login(idToken) {
        // save the user token to local storage
        localStorage.getItem('id_token', idToken);

        window.location.assign('/');
    }

    // clear the token from the local storage and force logout with reload
    logout() {
        // clear user token and profile data from local storage
        localStorage.removeItem('id_token');
        // this will reload the page and reset the state of the application
        window.location.assign('/');
    }
}

export default new AuthService();