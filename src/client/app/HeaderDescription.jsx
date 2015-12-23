import React from 'react';

class HeaderDescription extends React.Component {
 
  render() {
    return (
      <div>
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">{this.props.icon_name}</i></h2>
            <h5 className="center">{this.props.header}</h5>
          </div>
      </div>
    );
  }

}

export default HeaderDescription;
