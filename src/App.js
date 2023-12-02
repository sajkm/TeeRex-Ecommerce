import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";
import {Cart} from "./pages/cart/cart";
import {Shop} from "./pages/shop/shop";
import { Wishlist } from "./pages/wishlist/wishlist";
import { SingleItem } from "./pages/shop/singleItem";
import "./App.css"
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App"> 
    <ShopContextProvider>     
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element = {<Shop/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/product/:productId" element={<SingleItem/>} />
        </Routes>
          <Footer/>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;