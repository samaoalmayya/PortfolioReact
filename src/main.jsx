import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./Components/1-Header/Header";
import Hero from "./Components/2-Hero/Hero";
import Footer from "./Components/5-Footer/Footer";
import Main from "./Components/3-Main/Main";
import Contact from "./Components/4-Contact/Contact";
import "./index.css";
import Buttontoup from "./Components/Buttontoup.jsx";
import ButtonWatsapp from "./Components/ButtonWatsapp.jsx";

createRoot(document.getElementById("root")).render(
  <div id="up" className="container">
    <App />
    <Header></Header>

    <Hero></Hero>
    <div className="divider"></div>
    <Main></Main>
    <div className="divider"></div>
    <Contact></Contact>
    <div className="divider"></div>
    <Footer></Footer>
    <Buttontoup></Buttontoup>
    <ButtonWatsapp></ButtonWatsapp>
  </div>,
);
