import React, { useEffect } from 'react';
import './App.css';
import Player from './components/Player';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    document.title = 'Golden Eye';
  }, []);
  return (
    <main className="bg-white bg-blend-soft-light container mx-auto my-auto mt-16">
      <Player />
      <Footer />
    </main>
  );
}

export default App;
