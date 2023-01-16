import dashCard from "./component/dashCard";
import './component/dashCard';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './pages/home';
import './pages/features';
import './pages/pricing';

function App() {
  return (
    <div>
      <div><dashCard /></div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            <Link to="" className="navbar-brand" href="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/features" className="nav-link" href="#">Features </Link>
                </li>
                <li className="nav-item">
                  <Link to="/pricing" className="nav-link" href="#">Pricing</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br />
        <Routes>
<Route path="/" element={<home />} />
<Route path="features" element={<features />} />
<Route path="pricing" element={<pricing />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
