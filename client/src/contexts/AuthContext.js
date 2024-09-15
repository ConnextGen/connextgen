import React, { createContext, useContext, useReducer } from 'react';
import { logIn as logInAPI } from '../api';

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload, isAuthenticated: true };
        case 'LOGOUT':
            return { ...state, user: null, isAuthenticated: false };
        default:
            return state;
    }
};

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: JSON.parse(sessionStorage.getItem('user')) || null,
        isAuthenticated: sessionStorage.getItem('isAuthenticated') === 'true'
    });

    const logIn = async (email, password) => {
        try {
            const user = await logInAPI(email, password);
            sessionStorage.setItem('user', JSON.stringify(user));
            sessionStorage.setItem('isAuthenticated', 'true');
            dispatch({ type: 'LOGIN', payload: user });
            return user;
        } catch (error) {
            throw error;
        }
    };

    const logOut = () => {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('isAuthenticated');
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <AuthContext.Provider value={{ state, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);

export default AuthProvider;