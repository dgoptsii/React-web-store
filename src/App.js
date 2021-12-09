import "./App.css";
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import MainPage from "./components/MainPage";
import NotFound from "./components/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/" exact element={<MainPage />} />
        <Route path="/cart" exact element={<Cart />}  />
        <Route path="/*" exact element={<NotFound />}  />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
