import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Pages/HomePage/Home';
import Services from './components/Pages/Services/Services';
import Products from './components/Pages/Products/Products';
import SignUp from './components/Pages/SignUp/SignUp';



function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/sign-up" exact element={<SignUp />} />
        </Routes>
    </div>
  );
}

export default App;
