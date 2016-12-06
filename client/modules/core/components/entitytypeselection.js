import React from 'react';

class EntityTypeSelection extends React.Component {
  render() {
    if (!this.props.entitytypes) {
            return null;
        }
        return (
            <div>
            {
              this.props.entitytypes.map(function(entitytype) {
                return <div key={entitytype._id}><button onClick={this.handleClick} id={entitytype._id}>{entitytype.name}</button><br /></div>
              }, this)
            }
            </div>
        );
  }

  handleClick(e) {
    e.preventDefault();
    var buttonName = e.target.id;
    FlowRouter.go(`/entityselect/${buttonName}`);
  }
}

export default EntityTypeSelection;
