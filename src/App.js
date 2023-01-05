import Footer from './components/Footer';

import "./assets/App.css"

import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from "./components/Home";
import Blog from './components/Blog';
import Pages from './components/Pages';
import Element from './components/Element';
import Shop from './components/Shop';
import Contact from './components/Contact';
import NotFound from './components/NotFound';


function App() {

  return (<>
    <div className="App">

      <Header />
      
      <Routes>

        <Route path="/" exact element={<Home />} />
        <Route path="/blog"  element={<Blog />} />
        <Route path="/pages"  element={<Pages />} />
        <Route path="/shop"  element={<Shop/>} />
        <Route path="/element" element={<Element />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>} />
      
        



      </Routes>

      <Footer />
    </div>
  </>
  );
}

export default App;
