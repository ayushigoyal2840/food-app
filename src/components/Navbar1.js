import React from 'react';
import {Nav, Navbar ,Form, FormControl, Button} from 'react-bootstrap';

function Navbar1() {
    return (
        <nav>
      <ul className="left">
        <li><a href="">Ayushi WEb</a></li>
      </ul>
      <ul className="right">
        <li><a href=""><span className="shoppingcart"><i class="fas fa-shopping-cart"></i><span className="shoppingcount">0</span></span></a></li>
      </ul>
  </nav>
    )
}

export default Navbar1
