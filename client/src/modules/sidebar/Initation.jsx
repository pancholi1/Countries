
import { Link} from 'react-router-dom'
import React from 'react';
import './Initation.css'


function Initation() {
  return (
     <section className="sect1"> 
         <div className="text">
              <h1 className="center">  <Link to="/nav/home"  className="center2">Welcome World</Link></h1>
          </div> 


          
     </section>
  )
}

export default Initation;