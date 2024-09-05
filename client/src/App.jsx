import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Team from './pages/team/Team';
import LogIn from './pages/auth/LogIn';
import SignUp from './pages/auth/SignUp';

const App = () => {
  return (
    <div className='App'>
      <title>ConnextGen</title>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
