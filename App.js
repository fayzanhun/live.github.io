import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Product from './Product';
import Contact from './Contact';
import SingleProduct from "./SingleProduct";
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';

const App = () => {

const theme = {
  colors: {
    bg: "#fff",
  },
};
  return (
    <ThemeProvider theme={theme}>
    <tab>    
    <Router>
      <GlobalStyle />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/product" element={<Product />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/singleproduct/:id" element={<SingleProduct />} />
  <Route path="/cart" element={<Cart />} /> 
  <Route path="*" element={<ErrorPage />} /> 
</Routes>
  </Router>
  </tab>
  </ThemeProvider>

  );
};

export default App;
