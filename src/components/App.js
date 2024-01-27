import './App.css';
import './Button.css';
import Button from './Button';
import List from './List';
import ListBunnon from './ListButton';
import './listUsers'
import { products } from './listUsers';


function App() {
  
  return (
    <div className="App-header">
      <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button title={products} size="300px"/>
        <List />
        <ListBunnon />
        <Button title="I'm button" size="200px" />
    </div>

  );
}

export default App;
