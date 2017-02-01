import React from 'react';
import SiteSelection from './siteselection';

class AddNewServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stateValue: '1'};
  }

  render() {
    const {error} = this.props;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">Adding New Service</div>
        <div className="panel-body form-horizontal">
          {error ? this._renderError(error) : null}
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="sitename">Site Name:</label>
            <div className="col-sm-10">
              <input className="form-control" type="text" ref='sitename' placeholder="Site Name"/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="state">State:</label>
            <div className="col-sm-10">
              <SiteSelection countryID="1" onChange={this.handleStateChange.bind(this)}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button onClick={this._create.bind(this)}  className="btn btn-default">Add Site</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _create(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const {pEntityID, createSite} = this.props;
    const {sitename} = this.refs;

    createSite(pEntityID, sitename.value, this.state.stateValue);

    sitename.value = "";
  }

  _renderError(error) {
    return (
      <div className='alert alert-danger'>
        {error}
      </div>
    );
  }

  handleStateChange(value) {
    this.setState({stateValue: value});
  }
}

export default AddNewServices;
