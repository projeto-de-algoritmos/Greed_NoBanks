import Header from './components/Header';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Withdrawal from './pages/Withdrawal/Withdrawal';
import Balance from './pages/Balance/Balance';
import Deposit from './pages/Deposit/Deposit';
import Home from './pages/Home/Home';

function App() {
  return (
   
    <div> 
     <Header />
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Withdrawal" element={<Withdrawal />} />
        <Route path="/Balance" element={<Balance />} />
        {/*<Route path="/Deposit" element={<Deposit />} />*/}
      </Routes>
    </Router>
    </div>
  );
}

export default App;