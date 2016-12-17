import React from 'react';

class CreateSite extends React.Component {
  render() {
    const {error} = this.props;
    if (!this.props.states) {
            return null;
    }
    return (
      <div>
        {error ? this._renderError(error) : null}
        Site Name: <input type="text" ref='name'/> <br />
        Site Location: <select ref='location' className="PlayerList">
        {
            this.props.states.map(function(state) {
                return <option key={state.shortname} value={state._id}>{state.name}</option>
            })
        }
        </select>
        <br />
        <button onClick={this._create.bind(this)}>Add Site</button>
      </div>
    );
  }

  _create() {
    // const text = this.refs.text.value;
    const {create} = this.props;
    const {name, location} = this.refs;
    create(name.value, location.value);
    // this.refs.text.value = '';
  }

  _renderError(error) {
    return (
      <div className='error'>
        {error}
      </div>
    );
  }
}

export default CreateSite;
