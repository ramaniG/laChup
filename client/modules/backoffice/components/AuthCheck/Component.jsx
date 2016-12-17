import React from 'react';

export default class extends React.Component {

  // exit(path = '/login') {
  //   const {displayLoading} = this.props;
  //
  //   setTimeout(function() {
  //     FlowRouter.go(path);
  //   }, 0);
  //   return displayLoading();
  // }



  render() {

    const {
      displayLoading,
      displayContent,

      userId,
      requireUserId,
      requireNotLoggedIn,
      requiredRole,
      requiredGroup,

    } = this.props;

    // const {
    //   waitingForAuthData,
    // } = this.props;
    //
    // if (waitingForAuthData) {
    //   return displayLoading();
    // } else {

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
    // }
  }

}
