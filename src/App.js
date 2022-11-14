
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import Home from './pages/home/home';
import About from './pages/about/about';
function App() {
  return (
    <div className="App">
     <NavBar/>

    
    
      <Routes>

        <Route path='/about' exact element={<  About />}/>
        <Route path='/' exact element={<  Home />}/>
      </Routes>
      
     < About/>
    </div>
  );
}

export default App;
