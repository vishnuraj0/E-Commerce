import { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const currency = import.meta.VITE_CURRENCY;

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin ,setShowUserLogin] = useState(false);
  
  const [products, setcartITems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});
  
  //Fetch All Products

  const fetchProducts = async () => {
    setProducts(dummyProducts)
  }

  const value = { navigate, user, setUser, setIsSeller, isSeller, showUserLogin , setShowUserLogin };
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
 
export const useAppContext = () => {
  return useContext(AppContext);
};