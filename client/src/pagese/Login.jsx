import '../App.css';
import TextEntry from '../Components/TextEntry';

function Login() {
    return (
        <div className="background">
            <div className="pane">
                <h1>Welcome Back 👋</h1>
                <TextEntry header="Email"/>
                <TextEntry header="Password"/>
                <div className="button-container">
                    <a href="#" class="button">Login</a>
                    <h2>Don't have an account? <a href='signup' class="link">Sign Up</a></h2>
                </div>
            </div>
        </div>
    );
}

export default Login;