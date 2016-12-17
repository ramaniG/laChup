import React from 'react';
import TimeSelect from '../../core/components/timeselect';

class EditSite extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const {error} = this.props;
    const {pSiteID, site} = this.props;

    if (site) {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">Edit Site</div>
          <div className="panel-body form-horizontal">
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="sitename">Site Name:</label>
              <div className="col-sm-10">
                <input className="form-control" type="text" ref='sitename' placeholder="Site Name" defaultValue={site.name}/>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="sitename">Site Name:</label>
              <div className="col-sm-10">
                <input className="form-control" type="text" ref='sitename' placeholder="Site Name" defaultValue={site.stateObj.name}/>
              </div>
            </div>
            <h4 className="sub-header">Operating Hours</h4>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor='mondayOpen'>Monday :</label>
              <div className="col-sm-10">
                <TimeSelect />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor='tuesdayOpen'>Tuesday :</label>
              <div className="col-sm-10">
                <TimeSelect />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor='wednesdayOpen'>Wednesday :</label>
              <div className="col-sm-10">
                <TimeSelect />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor='thursdayOpen'>Thursday :</label>
              <div className="col-sm-10">
                <TimeSelect />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor='fridayOpen'>Friday :</label>
              <div className="col-sm-10">
                <TimeSelect />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor='saturdayOpen'>Saturday :</label>
              <div className="col-sm-10">
                <TimeSelect />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor='sundayOpen'>Sunday :</label>
              <div className="col-sm-10">
                <TimeSelect />
              </div>
            </div>
            <h4 className="sub-header">Closed Future Dates</h4>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button className="btn btn-default">Save</button>&nbsp;&nbsp;
                <button className="btn btn-default">Delete</button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default EditSite;
