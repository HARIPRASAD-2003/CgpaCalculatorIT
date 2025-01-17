import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Sem5 from './Sem5';
import Sem4 from './Sem4';
import Sem3 from './Sem3';
import Sem6 from './Sem6';
import Sem7 from './Sem7';

function App() {
  return(
    <Router>
      <div className='App'>
        <nav>
          <div>
            <Link to="/sem7">Sem - 7</Link>
            <Link to="/sem6">Sem - 6</Link>
            <Link to="/sem5">Sem - 5</Link>
            <Link to="/sem4">Sem - 4</Link>
            <Link to="/sem3">Sem - 3</Link>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Sem6 />} />
        <Route path="/sem7" element={<Sem7/>}/>
        <Route path="/sem6" element={<Sem6/>}/>
        <Route path="/sem5" element={<Sem5/>}/>
        <Route path="/sem4" element={<Sem4/>}/>
        <Route path="/sem3" element={<Sem3/>}/>
      </Routes>
      <div className='App'>
        <footer>
          <p>&copy; 2023. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}
export default App;
