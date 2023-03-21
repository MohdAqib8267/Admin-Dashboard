
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import UserList from './Pages/UserList/UserList';
import User from './Pages/User/User';
import NewUser from './Pages/NewUser/NewUser';
import ProductsList from './Pages/ProductsList/ProductsList';
import Product from './Pages/Product/Product';
import NewProduct from './Pages/newProduct/newProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar />
    <div className='container'>
      <Sidebar/>  
     
     <Routes>
      <Route exect path='/' element={ <Home />}/>
      <Route path='/users' element={ <UserList />}/>
      <Route path='/user/:userId' element={ <User />}/>
      <Route path='/newUser' element={<NewUser/>}/>
      <Route path='/products' element={<ProductsList/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/newProduct' element={<NewProduct/>}/>

       </Routes>
     
      
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
