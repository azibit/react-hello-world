import React from 'react';

class ImageDescription extends React.Component {
 
  render() {
    return (
      <div className="col s12 m4">
           <div className="card " >
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={this.props.img}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{this.props.card_title}<i className="material-icons right">more_vert</i></span>
      <p><a href={this.props.link}>Visit</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">{this.props.card_title}<i className="material-icons right">close</i></span>
      <p>{this.props.desc}</p>
    </div>
  </div>
  </div>
    );
  }

}

export default ImageDescription;
