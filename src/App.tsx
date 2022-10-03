import Navbar from './components/Navbar';
import About from './page/About';
import Home from './page/Home';
import Contract from './page/Contract';
import TimeLine from './page/TimeLine';
import Works from './page/Works';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useMouse from './components/useMouse';
function App() {
  const [hover, setHover] = useState<boolean>(false);
  const { textEnter, textLeave, variants, cursorVariant } = useMouse();
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
    </div>
  );
}

export default App;
