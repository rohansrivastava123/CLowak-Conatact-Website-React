import './App.css';

import Navbar from './Components/Navbar';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Friends from './Components/Friends';
// import Usercard from './Components/Usercard';
function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home /> }/>
        <Route exact path="/Friends" element={<Friends />}/>
        {/* <Route exact path="/list/:id" element={<Usercard />}/> */}
      </Routes>
     </Router>
    </>
  );
}

export default App;
