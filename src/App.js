import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login_form from './Login/Login_form';
import Header from './Header/Header';
import { About } from './Pages/About';
import Contact from './Pages/Contact';
import Create from '../src/Order/Create';
import Ordertable from './Order/Ordertable';
import Editorder from './Order/Editorder';

function App() {
  return (
    <>
    <Routes>
      <Route exact path ='/' element = {<Login_form/>}/>
      <Route exact path ='/home' element = {<Header/>}/>
      <Route exact path ='/about' element = {<About/>}/>
      <Route exact path ='/contact' element = {<Contact/>}/>
      <Route exact path = '/create' element = {<Create/>}/>
      <Route exact path = '/order' element = {<Ordertable/>}/>
      <Route exact path = '/edit-order/:id' element = {<Editorder/>}/>
    </Routes>
    </>
  );
}

export default App;
