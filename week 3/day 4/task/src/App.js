import{BrowserRouter as Router,Routes,Route}from "react-router-dom";
import Navbar from './component/navbar.component';

import './App.css';
import Footer from './component/footer.component';
import Home from './Home';
import About from './pages/About.pages';
import Team from './pages/Team.pages';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>

        <Route path="/"  element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/team" element={<Team/>}/>

        </Routes>
        
      
      <Footer/>

      </Router>
    </div>
  );
}

export default App;
