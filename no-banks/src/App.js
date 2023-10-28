import Header from './components/Header';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Withdrawal from './pages/Withdrawal/Withdrawal';

function App() {
  return (
   
    <div> 
     <Header />
     <Router>
      <Routes>
        <Route path="/Withdrawal" element={<Withdrawal />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;