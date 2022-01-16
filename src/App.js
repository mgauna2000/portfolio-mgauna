import React, { useState, useEffect } from 'react';
import Cover from './components/Cover';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [setScrollHeight])
 
  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
    </div>
  );
}

export default App;
