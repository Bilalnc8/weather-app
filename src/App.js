import './App.css';
import Background from './components/Background';
import SearchBar from './components/SearchBar';
import Temperature from './components/Temperature';


// <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/waterfall.jpg'})`}}/>

function App() {
  return (
    <div className="App">
     
     
     <SearchBar/>
     
    </div>
  );
}

export default App;
