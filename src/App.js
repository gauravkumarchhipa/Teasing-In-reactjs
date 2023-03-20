import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import ImageZoom from "./component/ImageZoom";
import Navbar from "./component/Navbar";
import { ZoomPinch } from "./component/ZoomPinch";
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/link" element={<ImageZoom/>}/>
          <Route path="/" element={<ZoomPinch/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
