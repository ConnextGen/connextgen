import { useEffect } from "react";
import SignUpForm from '../components/SignUpForm';
import '../App.css';

const SignUp = () => {
    useEffect(() => {
        document.title = 'ConnextGen | Sign Up';
    }, []);

    return (
        <div className="background">
            <div className="pane">
                <h1>Sign Up</h1>
                <SignUpForm />
            </div>
        </div>
    );
}

export default SignUp;