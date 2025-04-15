
import './styles/navbar.css';
import { Routes,Route, Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='leftside'>
    <Link to='/Men' className='logoLink'>
    <img src='/images/logo.png' alt=''/>
    </Link>
    <ul>
        
        <li><Link to="/">Men</Link></li>
        <li><Link to="/Ladies">Ladies</Link></li>
        <li><Link to="/kids">Kids</Link></li>
        
    </ul></div>
    <div className='rightside'>
    <ul>
        
        <li><Link to="/"><img src='./images/heart.png'/></Link></li>
        <li><Link to="/Ladies"><img src='./images/cart.png'/></Link></li>
        <li><Link to="/kids">Kids</Link></li>
        
    </ul>
   </div>
    </div>
    
  )
}
