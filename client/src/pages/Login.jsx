import { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import '../App.css';

const Login = () => {
    useEffect(() => {
        document.title = 'ConnextGen | Log In';
    }, []);

    return (
        <div className="background">
            <div className="pane">
                <h1>Welcome Back</h1>
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;