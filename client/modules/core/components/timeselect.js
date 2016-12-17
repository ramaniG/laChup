import React from 'react';

class TimeSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allDay : false };
  }

  handleChangeStart(e) {
    this.props.onChangeStart(e.target.value);
  }

  handleChangeEnd(e) {
    this.props.onChangeEnd(e.target.value);
  }

  handleChangeOpen(e) {
    this.props.onChangeEnd(e.target.checked);
  }

  handleChangeAllDay(e) {
    this.setState({allDay: e.target.checked});
    this.props.onChangeEnd(e.target.checked);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-2"><input type="checkbox" onChange={this.handleChangeOpen.bind(this)}/><label>Open</label></div>
        <div className="col-sm-2"><input type="checkbox" onChange={this.handleChangeAllDay.bind(this)}/><label>All Day</label></div>
        <div className="col-sm-3">
          <select className="form-control" onChange={this.handleChangeStart.bind(this)} disabled={this.state.allDay}>
            <option value='0000'>0000</option>
            <option value='0100'>0100</option>
            <option value='0200'>0200</option>
            <option value='0300'>0300</option>
            <option value='0400'>0400</option>
            <option value='0500'>0500</option>
            <option value='0600'>0600</option>
            <option value='0700'>0700</option>
            <option value='0800'>0800</option>
            <option value='0900'>0900</option>
            <option value='1000'>1000</option>
            <option value='1100'>1100</option>
            <option value='1200'>1200</option>
            <option value='1300'>1300</option>
            <option value='1400'>1400</option>
            <option value='1500'>1500</option>
            <option value='1600'>1600</option>
            <option value='1700'>1700</option>
            <option value='1800'>1800</option>
            <option value='1900'>1900</option>
            <option value='2000'>2000</option>
            <option value='2100'>2100</option>
            <option value='2200'>2200</option>
            <option value='2300'>2300</option>
          </select>
        </div>
        <div className="col-sm-1">TO</div>
        <div className="col-sm-3">
          <select className="form-control" onChange={this.handleChangeEnd.bind(this)} disabled={this.state.allDay}>
            <option value='0000'>0000</option>
            <option value='0100'>0100</option>
            <option value='0200'>0200</option>
            <option value='0300'>0300</option>
            <option value='0400'>0400</option>
            <option value='0500'>0500</option>
            <option value='0600'>0600</option>
            <option value='0700'>0700</option>
            <option value='0800'>0800</option>
            <option value='0900'>0900</option>
            <option value='1000'>1000</option>
            <option value='1100'>1100</option>
            <option value='1200'>1200</option>
            <option value='1300'>1300</option>
            <option value='1400'>1400</option>
            <option value='1500'>1500</option>
            <option value='1600'>1600</option>
            <option value='1700'>1700</option>
            <option value='1800'>1800</option>
            <option value='1900'>1900</option>
            <option value='2000'>2000</option>
            <option value='2100'>2100</option>
            <option value='2200'>2200</option>
            <option value='2300'>2300</option>
          </select>
        </div>
      </div>
    );
  }
}

export default TimeSelect;
