import React from 'react';


class side extends React.Component {
  state = {
    isOpen: false
  };

  handleHover = () => {
    this.setState({ isOpen: true });
  };

  handleLeave = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div
        className="side-nav"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleLeave}
      >
        <div className={`nav-content ${this.state.isOpen ? 'open' : ''}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </div>
    );
  }
}

export default side;
