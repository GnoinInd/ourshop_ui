import logo from './logo.svg';
import './css/App.css';
import Nav from './component/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Footer from './component/Footer';
import Logout from './component/Logout';
import PrivateComponent from './component/PrivateComponent';
import Profile from './component/Profile';
import Mobile from './Items/Mobile';
import Desktop from './Items/Desktop';
import Laptop from './Items/Laptop';
import Grocery from './Items/Grocery';
import Tshirts from './Items/Tshirts';
import Jeans from './Items/Jeans';
import Kurta from './Items/Kurta';
import Data from './Data/Data';
import Shops from './Items/Shops';
import Singlepage from './RedirectPage/Singlepage';
import Yourorder from './component/Yourorder';
import Wishlist from './component/Wishlist';
import Orderpage from './component/Orderpage';
import Transactionpage from './component/Transactionpage';
import Createshop from './component/Createshop';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Nav />


        <Routes>
          <Route element={<PrivateComponent />}>

            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/desktop" element={<Desktop />} />
            <Route path="/laptop" element={<Laptop />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/tshirts" element={<Tshirts />} />
            <Route path="/jeans" element={<Jeans />} />
            <Route path="/kurta" element={<Kurta />} />
            <Route path="/yourorder" element={<Yourorder />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/orderpage/:id" element={<Orderpage />} />
            <Route path="/singlepage" element={<Singlepage />} />
            <Route path="/shops/:id" element={<Shops />} />
            <Route path="/transactionpage/:id" element={<Transactionpage />} />
            <Route path="/createshop" element={<Createshop />} />


          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
