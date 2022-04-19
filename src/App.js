
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Blogs from './Components/Blogs/Blogs';
import CheckOut from './Components/CheckOut/CheckOut';
import Register from './Components/CheckOut/Register/Register';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import LogIn from './Components/LogIn/LogIn';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Services from './Components/Services/Services';
// const auth = getAuth()
// const verifyEmail = () => {
//   sendEmailVerification(auth.currentUser)
//     .then(() => {

//     })
// }

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/services" element=
          {
            <RequireAuth>
              <Services></Services>
            </RequireAuth>
          }></Route>
        <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
