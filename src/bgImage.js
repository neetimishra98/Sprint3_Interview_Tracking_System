import React from 'react';


import shoe1 from '../src/logo.jpg';
const Shoe = (e) => {
	return ( 
        <div className="shoe-container">
            <img src={shoe1} alt=""/>
        </div>
    );
}
export default Shoe;
/*import logo from './logo.jpg'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;
*/