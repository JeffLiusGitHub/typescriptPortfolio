import Navbar from './components/Navbar';
import About from './page/About';
import Home from './page/Home';
import Contract from './page/Contact';
import TimeLine from './page/TimeLine';
import Works from './page/Works';
import useMouse from './components/useMouse';

function App() {
  const { cursorRef, textEnter, textLeave } = useMouse();

  return (
    <div style={{ overflowX: 'hidden' }} >
      <div ref={cursorRef} className="cursor" />
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