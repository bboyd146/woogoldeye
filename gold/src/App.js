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
      <div className="mt-16 mb-16 text-center">
        <a href="https://smarturl.it/66dfqb">
          <p className="pt-16 font-mono text-xl">Music
          </p>
        </a>
      </div>
      <Footer />
    </main>
  );
}

export default App;
