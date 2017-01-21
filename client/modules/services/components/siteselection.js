import React from 'react';

class SiteSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    if (!this.props.sites) {
      return null;
    }
    return (
      <select className="form-control" onChange={this.handleChange.bind(this)}>
      {
        this.props.sites.map(function(sites) {
            return <option key={sites.shortname} value={sites._id}>{sites.name}</option>
        })
      }
      </select>
    );
  }
}

export default SiteSelection;
