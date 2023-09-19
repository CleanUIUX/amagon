import './style/App.css';
import Header from './component/Header';
import Home from './component/Home';
import Cart from './page/Cart';
import {HashRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Header />}></Route>
          <Route path='cart' element={<Header />}></Route>
          {/* <Route path='/psgr/*' element={<Header-sub />}></Route> */}
        </Routes>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='cart' element={<Cart />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
