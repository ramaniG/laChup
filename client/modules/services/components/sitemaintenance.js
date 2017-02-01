import React from 'react';
import ListServices from '../containers/listservices';
import AddNewService from '../containers/addnewservice';
import EditService from '../containers/editservice';

class ServiceMaintenance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedService: ''};
  }

  handleServiceChange(value) {
    this.setSite({selectedService: value});
  }

  render() {
    const {pEntityID} = this.props;

    if (this.state.selectedService != '') {
      return  (
        <div className="row placeholders">
          <div className="col-md-6">
            <AddNewService pEntityID={pEntityID} />
            <ListServices pEntityID={pEntityID} onChange={this.handleServiceChange.bind(this)}/>
          </div>
          <div className="col-md-6">
            <EditService pServiceID={this.state.selectedService} />
          </div>
        </div>
      );
    }

    return (
      <div className="row placeholders">
        <div className="col-md-6">
          <AddNewService pEntityID={pEntityID} />
          <ListServices pEntityID={pEntityID} onChange={this.handleServiceChange.bind(this)}/>
        </div>
        <div className="col-md-6">
        </div>
      </div>
    );
  }

  setCurrentService(value, name) {
    console.log(value);
    this.setSite({selectedService: name});
  }
}

export default ServiceMaintenance;
