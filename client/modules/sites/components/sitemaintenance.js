import React from 'react';
import ListSites from '../containers/listsites';
import AddNewSite from '../containers/addnewsite';
import EditSite from '../containers/editsite';

class SiteMaintenance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedSite: ''};
  }

  handleSiteChange(value) {
    this.setState({selectedSite: value});
  }

  render() {
    const {pEntityID} = this.props;

    if (this.state.selectedSite != '') {
      return  (
        <div className="row placeholders">
          <div className="col-md-6">
            <AddNewSite pEntityID={pEntityID} />
            <ListSites pEntityID={pEntityID} onChange={this.handleSiteChange.bind(this)}/>
          </div>
          <div className="col-md-6">
            <EditSite pSiteID={this.state.selectedSite} />
          </div>
        </div>
      );
    }

    return (
      <div className="row placeholders">
        <div className="col-md-6">
          <AddNewSite pEntityID={pEntityID} />
          <ListSites pEntityID={pEntityID} onChange={this.handleSiteChange.bind(this)}/>
        </div>
        <div className="col-md-6">
        </div>
      </div>
    );
  }

  setCurrentSite(value, name) {
    console.log(value);
    this.setState({selectedSite: name});
  }
}

export default SiteMaintenance;
