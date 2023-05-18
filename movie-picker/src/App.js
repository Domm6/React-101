import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Catalog from './components/Catalog';
import PickMovie from './components/PickMovie';
import AddMovie from './components/AddMovie';
import Header from './components/Header';
import LoginForm from './components/loginform';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="/movie" element={<PickMovie/>}/>
          <Route path="/add" element={<AddMovie/>}/>
          <Route path="/login" element={<LoginForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
