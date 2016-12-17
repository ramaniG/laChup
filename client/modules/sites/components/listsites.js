import React from 'react';

class ListSites extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {sites} = this.props;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">List of Sites</div>
        <div className="panel-body form-horizontal">
          <div className="form-group">
            <div className="col-sm-4">
              <input className="form-control" ref="txtSearch" type="Text" placeholder="Search" />
            </div>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Site Name</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
            {sites.map(site => (
              <tr key={site._id} onClick={()=>this._setCurrentSite(site._id)}>
                <td>{site.name}</td>
                <td>{site.stateObj.name}</td>
              </tr>
            ), this)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  _setCurrentSite(value) {
    this.props.onChange(value);
  }
}

export default ListSites;
