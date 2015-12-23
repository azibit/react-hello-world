import React from 'react';

class MainDescription extends React.Component {
 
  render() {
    return (
      <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
      <div className="container">
        <br/><br/>
        <h1 className="header center teal-text text-lighten-2">Abdul Azeez Idris</h1>
        <div className="row center">
          <h5 className="header col s12 light">An Algorithmist who provides efficient Algorithms to solve some of the rising
problems of the Modern World</h5>
        </div>
        <div className="row center">
          <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get My CV</a>
        </div>
        <br/><br/>

      </div>
    </div>
    <div className="parallax"><img src="img/background1.jpg" alt="Unsplashed background img 1"/></div>
  </div>
    );
  }

}

export default MainDescription;
