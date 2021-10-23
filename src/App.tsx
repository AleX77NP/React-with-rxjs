import './App.css';
import { Deck } from './components/Deck';
import { Search } from './components/Search';


function App() {
  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
      <Search/>
      <Deck />
    </div>
  );
}

export default App;
