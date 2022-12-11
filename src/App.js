import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Registration from './components/Homestayregistration';


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Registration />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
