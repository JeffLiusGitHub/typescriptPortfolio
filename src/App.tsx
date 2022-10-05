import Navbar from './components/Navbar';
import About from './page/About';
import Home from './page/Home';
import Contract from './page/Contract';
import TimeLine from './page/TimeLine';
import Works from './page/Works';
import { motion } from 'framer-motion';
import useMouse from './components/useMouse';
import BottomNav from './components/BottomNav';
import useWindowSize from './components/useWindowSize';
import { AnimatePresence } from 'framer-motion';
function App() {
  const { textEnter, textLeave, variants, cursorVariant } = useMouse();
  const { renderButtomIcon } = useWindowSize();

  return (
    <div>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
   
      />
      <Navbar />
      <Home textEnter={textEnter} textLeave={textLeave} />
      <About textEnter={textEnter} textLeave={textLeave} />
      <TimeLine />
      <Works />
      <Contract textEnter={textEnter} textLeave={textLeave} />
      {renderButtomIcon && <BottomNav />}
    </div>
  );
}

export default App;
