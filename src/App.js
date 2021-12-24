import './App.css';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import StartPost from './components/StartPost';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <StartPost/>
      <Posts/>
    </div>
  );
}

export default App;
