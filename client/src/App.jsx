import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/home/Home';
import Course from './pages/course/Course';
import Lesson from './pages/lesson/Lesson';
import Team from './pages/team/Team';
import LogIn from './pages/auth/LogIn';
import SignUp from './pages/auth/SignUp';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          index
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path='/course'
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <Course />
            </motion.div>
          }
        />
        <Route
          path='/course/unit/lesson'
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <Lesson />
            </motion.div>
          }
        />
        <Route
          path='/team'
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <Team />
            </motion.div>
          }
        />
        <Route
          path='/login'
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <LogIn />
            </motion.div>
          }
        />
        <Route
          path='/signup'
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <SignUp />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  return (
    <div className='App'>
      <title>ConnextGen</title>
      <HashRouter>
        <AnimatedRoutes />
      </HashRouter>
    </div>
  );
}

export default App;
