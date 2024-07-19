import '../App.css';
import TextEntry from '../components/TextEntry';
import Dropdown from '../components/Dropdown';

function SignUp() {
    return (
        <div className="background">
            <div className="pane">
                <h1>Sign Up 👤</h1>
                <div className="names">
                    <TextEntry header="First Name"/>
                    <TextEntry header="Last Name"/>
                </div>
                <Dropdown header="Select School" options={['School 1', 'School 2', 'School 3']}/>
                <TextEntry header="Email"/>
                <TextEntry header="Create Password"/>
                <TextEntry header="Confirm Password"/>
                <div className="button-container">
                    <a href="#" class="button">Sign Up</a>
                    <h2>Already have an account? <a href='login' class="link">Login</a></h2>
                </div>
            </div>
        </div>
    );
}

export default SignUp;