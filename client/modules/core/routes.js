import React from 'react';
import { mount } from 'react-mounter';
import {Accounts} from 'meteor/accounts-base';

import MainLayout from './components/mainlayout';
import StateSelection from './containers/stateselection';
import NewSite from '../sites/containers/newsite.js';
import SiteMaintenance from '../sites/components/sitemaintenance.js';

// import {
//   AuthCheck,
//   LayoutDefault,
//   Simplest,
//   NotFound,
// } from '/client/configs/components.js';
// import Register from '../backoffice/components/EntityRegister/Wrapper.jsx';
// import Login from '../backoffice/components/EntityLogin/Wrapper.jsx';
// import Password from '../backoffice/components/EntityPassword/Wrapper.jsx';
// import Profile from '../backoffice/components/EntityProfile/Wrapper.jsx';
// import Account from '../backoffice/components/EntityAccount/Wrapper.jsx';

export default function (injectDeps, {FlowRouter}) {
  // const AuthCheckCtx = injectDeps(AuthCheck);
  // const MainLayoutCtx = injectDeps(MainLayout);

  // FlowRouter.route('/', {
  //   name: 'main',
  //   action() {
  //     mount(MainLayoutCtx, {
  //       content: () => (<StateSelection countryID="1" />)
  //     });
  //   }
  // });

  // FlowRouter.route('/', {
  //   name: 'app.home',
  //   action() {
  //     mount(AuthCheckCtx, {
  //       LayoutDefault, content: () => (<Simplest title="App main screen"/>)
  //     });
  //   }
  // });
  //
  // FlowRouter.route('/register', {
  //   name: 'admin.register',
  //   action() {
  //     mount(AuthCheckCtx, {
  //       LayoutDefault, content: () => (<Register />),
  //       requireNotLoggedIn: true
  //     });
  //   }
  // });
  //
  // FlowRouter.route('/login', {
  //   name: 'admin.login',
  //   action() {
  //     mount(AuthCheckCtx, {
  //       LayoutDefault, content: () => (<Login />),
  //       requireNotLoggedIn: true
  //     });
  //   }
  // });
  //
  // FlowRouter.route('/password', {
  //   name: 'admin.password',
  //   action() {
  //     mount(AuthCheckCtx, {
  //       LayoutDefault, content: () => (<Password />)
  //     });
  //   }
  // });
  //
  // FlowRouter.route('/account', {
  //   name: 'admin.account',
  //   action() {
  //     mount(AuthCheckCtx, {
  //       LayoutDefault, content: () => (<Account />),
  //       requireUserId: true
  //     });
  //   }
  // });
  //
  // FlowRouter.route('/profile', {
  //   name: 'admin.profile',
  //   action() {
  //     mount(AuthCheckCtx, {
  //       LayoutDefault, content: () => (<Profile />),
  //       requireUserId: true
  //     });
  //   }
  // });

  // FlowRouter.route('/logout', {
  //   name: 'admin.logout',
  //   action() {
  //     Accounts.logout();
  //     // Meteor.logout(() => {
  //     FlowRouter.go('/login');
  //     // });
  //   }
  // });
  
  FlowRouter.route('/', {
    name: 'main',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<StateSelection countryID="1" />)
      });
    }
  });

  FlowRouter.route('/sites/maintenance/:entityID', {
    name: 'sites',
    action(param) {
      mount(MainLayoutCtx, {
        content: () => (<SiteMaintenance pEntityID={param.entityID} />)
      });
    }
  });

  FlowRouter.route('/services/maintenance', {
    name: 'services',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewSite countryID="1" />),
        subcontent: () => (<StateSelection countryID="1" />)
      });
    }
  });

  FlowRouter.route('/users/maintenance', {
    name: 'users',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewSite countryID="1" />),
        subcontent: () => (<StateSelection countryID="1" />)
      });
    }
  });
}
