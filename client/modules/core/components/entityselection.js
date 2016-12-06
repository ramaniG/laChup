import React from 'react';

class EntitySelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.entities) {
        return null;
    }
    return (
        <div>
        {
          this.props.entities.map(function(entity) {
            return <div key={entity._id}><button onClick={this.handleClick} id={entity._id}>{entity.name}</button><br /></div>
          }, this)
        }
        </div>
    );
  }

  handleClick(e) {
    e.preventDefault();
    var buttonName = e.target.id;
    FlowRouter.go(`/siteselect/${buttonName}`);
  }
}

export default EntitySelection;
