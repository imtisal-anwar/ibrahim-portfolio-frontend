import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./page/Home/home";
import Contact from "./page/Contact/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact-me" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
