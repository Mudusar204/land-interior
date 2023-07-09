import { BrowserRouter,Router,Route,Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './App.css';
import './index.css';

import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Slider from './components/Slider'; 
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import Studio from './components/studio/Studio';
import { Link } from 'react-router-dom';
function App() {
 
  return (

    <div >
      
      <BrowserRouter>

<Navbar/>
<Header/>
<div className='bgSection' >
<Projects/>
<Slider/>
</div>
<Studio/>
<Contacts/>
<Footer/>
      <Routes>
      {/* <Route path='/header' element={<Footer id='header'/>}></Route> */}

        {/* <Route path='/footer' element={<Footer id='footer'/>}></Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
