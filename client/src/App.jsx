// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sessions from './pages/Sessions';
import Contact from './pages/Contact';
import About from './pages/About';

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: var(--color-background);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Router>
      <AppContainer>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;