import {BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/NavBar";
import Home from "./components/layout/Home";
import { SearchProvider } from "./SearchContext";
function App() {
  return (
    <div className="App">
     <SearchProvider>
      <Router>
        <Navbar />
        <Home />
      </Router>
      </SearchProvider>
    </div>
    
  );
}

export default App;
