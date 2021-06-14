 import './nav.css';
import { Link} from 'react-router-dom'
import React from 'react';

function NavBar() {
  return (
     <div className="BodyNav"> 
          <div className="Header" >
              <Link to="/home" >HOME</Link>
              <Link to ="/activity"> Activity</Link>
          </div>
     </div>
  )
}

export default NavBar;