
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Blogs from './Components/Blogs/Blogs';
import CheckOut from './Components/CheckOut/CheckOut';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import LogIn from './Components/LogIn/LogIn';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
