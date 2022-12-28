//import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import './Style/style.css'
import HomePage from './Pages/HomePage';
import AllRoutes from './Pages/AllRoutes';
import Footer from './Pages/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/> 
     {/* <HomePage/> */}
     <AllRoutes/>
      <Footer/> 
    </div>
  );
}

export default App;
