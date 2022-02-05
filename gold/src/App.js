import React, {useEffect} from 'react';
import './App.css';
import Player from './components/Player';

function App() {
  useEffect(() => {
    document.title = 'Golden Eye';
  }, []);
  return (
    <main className="text-gray-400  flex body-font">
      <Player />
    </main>
  );
}

export default App;
