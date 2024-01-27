
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import Header from './common/Header';
import{Routes,Route} from 'react-router-dom'
import Home from './page/homePage/Home';
import Cart from './page/cartPage/Cart';
import Shop from './page/shopPage/Shop';
import Footer from './common/Footer';


function App() {
  return (
    <div >
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/shop' element={<Shop/>}></Route>
    </Routes>
  <Footer/>
   </div>
  );
}

export default App;
