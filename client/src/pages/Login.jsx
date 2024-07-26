import '../App.css';
// import TextEntry from '../components/TextEntry';
import LoginForm from "../components/LoginForm";

function Login() {
    return (
        <>
        <div className="background">
            <div className="pane">
                <h1>Welcome Back 👋</h1>
                <LoginForm />
                <h2>Don't have an account? <a href='signup' className="link">Sign Up</a></h2>
            </div>
        </div>
        </>
    );
}

export default Login;