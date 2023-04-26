import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import worksList from './worksList';
import Home from './components/Home';
import Work from './components/Work';
import Navbar from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Contacts from './components/Contacts';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = 'work/:slug' element = {<Work/>}/>
          <Route path = 'services' element = {<Services/>}/>
          <Route path = 'about' element = {<About/>}/>
          <Route path = 'contacts' element = {<Contacts/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
