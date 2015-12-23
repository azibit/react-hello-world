import React from 'react';

class Logo extends React.Component {
 
  render() {
    return (
       <nav className="teal lighten-2" role="navigation">
    <div className="nav-wrapper container row">
      <a id="logo-container" href="#" className="brand-logo">
        <img className="circle responsive-img" src="img/azibit.jpg" width="48"/>
      </a>

      <ul className="right hide-on-med-and-down ">
        <li><a className = "white-text" href="#Contact_Us">HOME</a></li>
        <li><a className = "white-text" href="#">WORKS</a></li>
        <li><a className = "white-text" href="#">AGENCY</a></li>
        <li><a className = "white-text" href="#">CONTACT</a></li>
      </ul>

      <ul id="nav-mobile" className="side-nav">
        <li><a href="#">Navbar Link</a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
    </div>
  </nav>
    );
  }

}

export default Logo;
