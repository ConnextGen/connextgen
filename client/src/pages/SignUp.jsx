import '../App.css';

import SignUpForm from '../components/SignUpForm';

function SignUp() {
    return (
        <div className="background">
            <div className="pane">
                <h1>Sign Up 👤</h1>
                <SignUpForm />
                <h2>Already have an account? <a href='login' className="link">Login</a></h2>
            </div>
        </div>
    );
}

export default SignUp;