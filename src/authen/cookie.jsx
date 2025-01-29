// authCookie.js
import Cookies from 'js-cookie';

// Set auth cookie with 7 days expiration
export const setAuthCookie = () => {
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 8);
    Cookies.set('adminAuth', 'true', { expires: expirationDate });
};

// Get auth cookie
export const getAuthCookie = () => {
    return Cookies.get('adminAuth');
};

// Remove auth cookie
export const removeAuthCookie = () => {
    Cookies.remove('adminAuth');
};

// Check if user is authenticated
export const isAuthenticated = () => {
    return getAuthCookie() === 'true';
};