import React from 'react';

class StateSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    if (!this.props.states) {
      return null;
    }
    return (
      <select className="form-control" onChange={this.handleChange.bind(this)}>
      {
        this.props.states.map(function(state) {
            return <option key={state.shortname} value={state._id}>{state.name}</option>
        })
      }
      </select>
    );
  }
}

export default StateSelection;
