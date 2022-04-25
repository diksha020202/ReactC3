
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import { FooterContainer } from './containers/footer'


import Start from './components/pages/Start';
import Sell from './components/pages/Sell';
import Market from './components/pages/Market';
import Manage from './components/pages/Manage';
import Card from './components/pages/Card';
import Button from './components/pages/Button';





function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="start" element={<Start/>}/>
        <Route path="sell" element={<Sell/>}/>
        <Route path="market/*" element={<Market/>}/>
       
        <Route path="manage" element={<Manage/>}/>
 
      </Routes>
      <Card/>
      <Button/>
      <FooterContainer/>
      
    </div>
  );
}

export default App;
