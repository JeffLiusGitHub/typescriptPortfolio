import Navbar from './components/Navbar';
import About from './page/About';
import Home from './page/Home';
import Skills from './page/Skills';
import TimeLine from './page/TimeLine';
import { useState } from 'react';

function App() {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div>
      {/* setHoverOutLink={setHoverOutLink} */}
      <Navbar />
      {/* hoverOuterLink={hoverOuterLink} */}
      <Home />
      <About />
      <TimeLine />
      <Skills />
    </div>
  );
}

export default App;
