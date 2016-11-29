import React from 'react';

class StateSelection extends React.Component {
  render() {
    if (!this.props.states) {
            return null;
        }
        return (
            <select className="PlayerList">
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
