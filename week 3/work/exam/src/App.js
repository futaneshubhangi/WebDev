import Navbar from './component/navbar.component';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './component/header.component';
import Footer from './component/footer.component';
import Notfound from './pages/notfound.page';
import Home from "./Home";




function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Notfound/>}/>
      </Routes>
   
      <Footer/>
      </Router>
      
   
    </div>
  );
}

export default App;
