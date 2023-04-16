import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Home from "./Home";
import Details from "./Details";
import SignUp from "./Signup";
import LoginForm from "./LoginForm";
import SellP from "./SellP";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/details' element={<Details />}></Route>
        <Route path='/sell' element={<SellP />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<LoginForm />}></Route>
        {/* <Route path='/payment' element={<Payment />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}
