import Navbar from './components/Navbar';
import About from './page/About';
import Home from './page/Home';
import Contract from './page/Contract';
import TimeLine from './page/TimeLine';
import Works from './page/Works';
import { motion } from 'framer-motion';
import useMouse from './components/useMouse';
import BottomNav from './components/BottomNav';
import React, { useEffect, useState } from 'react';

function App() {
  const { textEnter, textLeave, variants, cursorVariant } = useMouse();
  const [renderButtomIcon, setRenderButtomIcon] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setRenderButtomIcon(true);
      } else {
        setRenderButtomIcon(false);
      }
      // console.log('resize to: ', window.innerWidth, 'x', window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
