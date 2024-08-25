import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = 'ConnextGen | Home';
    }, []);

    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

export default Home;