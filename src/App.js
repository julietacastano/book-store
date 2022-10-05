import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Contador from './components/Contador/Contador';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting = {"Bienvenidos!"}/>
      <Contador />
    </div>
  );
}

export default App;
