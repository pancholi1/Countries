 import './nav.css';
import { Link} from 'react-router-dom'
import React from 'react';
function NavBar() {
  return (
     <div className="BodyNav"> 


      <nav className="Header">
          <li><Link to="/nav/home" className= "link">HOME</Link></li>
          <li> <Link to ="/nav/activity" className= "link"> Activity</Link></li>
      </nav>




          {/* <div className="Header" >
              <Link to="/nav/home" >HOME</Link>
              <Link to ="/nav/activity"> Activity</Link>            
          </div> */}
     </div>
  )
}

export default NavBar;