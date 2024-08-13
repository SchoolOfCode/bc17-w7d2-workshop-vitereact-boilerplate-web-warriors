import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./App.css";
import Wrapper from "./Components/Wrapper/Wrapper.jsx";
import Hero from "./Components/MainSection/MainSection.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <>
    <Wrapper></Wrapper>
    <Hero></Hero>
    </>
  );
}

export default App;
