import React, {useEffect} from 'react';
import './App.css';
import Player from './components/Player';
import Header from './components/Header';

function App() {
  useEffect(() => {
    document.title = 'Golden Eye';
  }, []);
  return (
    <main className="bg-slate-200 bg-blend-soft-light container mx-auto my-auto">
      <Header />
      <Player />
    </main>
  );
}

export default App;
