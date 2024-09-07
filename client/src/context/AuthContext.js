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
        user: JSON.parse(localStorage.getItem('user')) || null,
        isAuthenticated: localStorage.getItem('isAuthenticated') === 'true'
    });

    const logIn = async (email, password) => {
        try {
            const user = await logInAPI(email, password);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('isAuthenticated', 'true');
            dispatch({ type: 'LOGIN', payload: user });
            return user;
        } catch (error) {
            throw error;
        }
    };

    const logOut = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
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