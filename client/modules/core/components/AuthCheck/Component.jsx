import React from 'react';

export default class extends React.Component {

  render() {

    const {
      // displayLoading,
      displayContent,

      userId,
      requireUserId,
      requireNotLoggedIn,
      requiredRole,
      requiredGroup,

    } = this.props;

    if (userId && requireNotLoggedIn) {
      FlowRouter.go('/');
    }

    if (!userId && requireUserId) {
      FlowRouter.go('/login');
    }

    if (requiredRole && requiredGroup && !Roles.userIsInRole(userId, requiredRole, requiredGroup)) {
      FlowRouter.go('/');
    }

    return displayContent();
  }

}
