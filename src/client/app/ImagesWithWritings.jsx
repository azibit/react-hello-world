import React from 'react';

class ImagesWithWritings extends React.Component {
 
  render() {
    return (
         <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
      <div className="container">
        <div className="row center">
          <h5 className="header col s12 light"><h2>{this.props.description}</h2></h5>
        </div>
      </div>
    </div>
    <div className="parallax"><img src={this.props.img} alt="Unsplashed background img 2"/></div>
  </div>
    );
  }

}

export default ImagesWithWritings;
