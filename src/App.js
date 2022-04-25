
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import Logout from './components/pages/Logout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Books from './components/pages/Books';
import About from './components/pages/About';





function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="logout" element={<Logout/>}/>
        <Route path="login/*" element={<Login/>}/>
        <Route path="books" element={<Books/>}/>
        <Route path="about" element={<About/>}/>
 
      </Routes>
      
    </div>
  );
}

export default App;
