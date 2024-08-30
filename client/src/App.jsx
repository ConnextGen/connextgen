import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Team from './pages/team/Team';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
