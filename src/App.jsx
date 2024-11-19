import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Numbers from "./pages/Numbers";
import Rules from "./pages/Rules";

function App() {
  return (
    <div className="h-min-screen bg-base">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/numbers" element={<Numbers />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
