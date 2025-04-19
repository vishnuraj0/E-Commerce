import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { useAppContext } from './context/AppContext';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import AllProducts from './pages/AllProduct';


const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin } = useAppContext();

  return (
    <div>
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}

      <Toaster />
      <div>       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/products' element={<AllProducts/>} />
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>

  );
};

export default App;