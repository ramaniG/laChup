import React from 'react';

class SiteSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.sites) {
        return null;
    }
    return (
        <div>
        {
          this.props.sites.map(function(site) {
            return <div key={site._id}><button onClick={this.handleClick} id={site._id}>{site.name}</button><br /></div>
          }, this)
        }
        </div>
    );
  }

  handleClick(e) {
    e.preventDefault();
    var buttonName = e.target.id;
    console.log(buttonName);
  }
}

export default SiteSelection;
