
import './App.css';
import Folder from './components/Folder';
import explorer from "./data";

function App() {

  return (
    <div >
      <Folder explorer={explorer} />

    </div >
  );
}

export default App;
