import Signup from "./components/pages/signup/signup";
import "./App.css";
import Home from "./components/pages/home/Home";
import Products from "./components/porducts/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/pages/singleProd/SingleProduct";
import FirebaseLogIn from "./components/pages/firebaseSignin/firebaseLogIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:cat" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/login" element={<FirebaseLogIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
