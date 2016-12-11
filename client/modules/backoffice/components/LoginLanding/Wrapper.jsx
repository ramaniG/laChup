import React from 'react';
//
// // import dataComposer from '../../lib/AccountRegister.js';
// import Component from './Component.jsx';
// import CreateEntity from '../../../superadmin/Component.jsx'
// const ComponentCtx = dataComposer(Component);
//
export default class extends React.Component {

  // function SuperAdminGreeting(props) {
  //   return <h1>Welcome back Super admin </h1>;
  // }
  //
  // function EntityGreeting(props) {
  //   return <h1>Hello Entity </h1>;
  // }
  //
  // function Landing(props) {
  //   const isLoggedIn = props.isLoggedIn;
  //   if (isLoggedIn) {
  //     return <SuperAdminGreeting />;
  //   }
  //   return <EntityGreeting />;
  // }

  render() {
    console.log('inside render');
    return(<div>Nothing Here..</div>);
  }

  componentDidMount() {
    console.log('after mount');
    if(Roles.userIsInRole(Meteor.userId(), ['super-admin'], Roles.GLOBAL_GROUP)) {
        FlowRouter.go('secret');
      } else {
        FlowRouter.go('app.account');
      }
    // if (Roles.userIsInRole(userId, )) {
    //   if (userAddInfo.registered) {
    //     FlowRouter.go('entitytypeselect');
    //   } else {
    //     FlowRouter.go('registeruser');
    //   }
    // }
  }

}
