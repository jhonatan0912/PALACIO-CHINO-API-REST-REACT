import React from 'react'
import { Route, Routes } from "react-router-dom";
import NotFound from './components/NotFound';
import ProductForm from './components/ProductForm';
import ProductsPage from './components/ProductsPage';
import NavBar from "./components/Navbar";
import { ProductContextProvider } from "./context/ProductProvider";

function App() {
  return (
    <ProductContextProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='/new' element={<ProductForm />} />
        <Route path='/edit/:id' element={<ProductForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ProductContextProvider>
  )
}

export default App