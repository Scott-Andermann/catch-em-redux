import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./features/Home/Home";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Socket from "./components/Socket/Socket";
import Header from "./components/Header";
import Explore from "./features/Explore/Explore";
import Pokedex from "./features/Pokedex/Pokedex";
import Chat from "./components/Chat/Chat";
import Menu from "./components/Menu/Menu";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Provider store={store}>
        <Socket />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/pokedex" element={<Pokedex />} />
        </Routes>
        <Chat />
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
