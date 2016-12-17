import React from 'react';

export default class extends React.Component {

  render() {

    // const content = _.get(this.props,'content', () => {});
    const {
      content
    } = this.props;

    return (
      <div>

        <div className="container">

          {content()}

        </div>
      </div>
    );
  }
}
