import Registration from "./pages/registrationpage/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./pages/categorypage/Category";
import './App.css'
import Home from "./pages/homepage/Homepage";
import Page from './pages/page4/Page';


function App() {



  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/category" element={<Category />} />
          <Route path="/home" element={<Home />} />
          <Route path="/page4" element={<Page />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
