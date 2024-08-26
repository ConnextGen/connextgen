import { useEffect } from 'react';

const Team = () => {
    useEffect(() => {
        document.title = 'Team | ConnextGen';
    }, []);

    return (
        <div>
            <h2>Team</h2>
        </div>
    );
}

export default Team;