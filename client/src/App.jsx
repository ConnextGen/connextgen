import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Course from './pages/course/Course';
import Lesson from './pages/lesson/Lesson';
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
          <Route path='/course' element={<Course />} />
          <Route path='/course/unit/lesson' element={<Lesson />} />
          <Route path='/team' element={<Team />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;