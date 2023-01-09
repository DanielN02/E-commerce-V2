import { Route, Routes } from "react-router-dom";
import Index from "./components/pages/Index";
import Shoes from "./components/pages/Shoes";
import Tops from "./components/pages/Tops";
import Fitteds from "./components/pages/Fitteds";
import Collectibles from "./components/pages/Collectibles";
import Contact from "./components/pages/Contact";

// import Axios from 'axios'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/tops" element={<Tops />} />
        <Route path="/fitteds" element={<Fitteds />} />
        <Route path="/collectibles" element={<Collectibles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
