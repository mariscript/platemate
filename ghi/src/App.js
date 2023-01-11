import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";

function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
      <h1>Hello!</h1>
    </BrowserRouter>
  );
}

export default App;
