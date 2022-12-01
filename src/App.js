
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import Home from './pages/home/home';
import About from './pages/about/about';
import Service from './pages/services/service';
function App() {
  return (
    <div className="App">
     <NavBar/>
        <  Home />
     <  About />
     < Service/>
    
{/*     
      <Routes>

        <Route path='/about' exact element={<  About />}/>
        <Route path='/' exact element={<  Home />}/>
      </Routes> */}
      
    
    </div>
  );
}

export default App;
