
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import './App.css';
import { Navbar } from './compnents/Navbar';
import { Men } from './compnents/Men';
import { Ladies } from './compnents/Ladies';
import { Kids } from './compnents/Kids';

function App() {
  return (<>
  <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/Men'element={<Men/>}></Route>
    <Route path='/' element={<Men/>}></Route>
    <Route path='/Ladies.js ' element={<Ladies/>}></Route>
    <Route path='/kids.js ' element={<Kids/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
