import React from 'react';
import {mount} from 'react-mounter';
import {Accounts} from 'meteor/accounts-base';

import {
  AuthCheck,
  LoginLayout,
  LayoutDefault,
  Simplest,
  NotFound,
} from '/client/configs/components.js';

import Register from './components/EntityRegister/Wrapper.jsx';
import Login from './components/EntityLogin/Wrapper.jsx';
import Password from './components/EntityPassword/Wrapper.jsx';
import Profile from './components/EntityProfile/Wrapper.jsx';
import Account from './components/EntityAccount/Wrapper.jsx';

export default function (injectDeps, {FlowRouter}) {

  const AuthCheckCtx = injectDeps(AuthCheck);

  // FlowRouter.route('/', {
  //   name: 'app.home',
  //   action() {
  //     mount(AuthCheckCtx, {
  //       LayoutDefault, content: () => (<Simplest title="App main screen"/>)
  //     });
  //   }
  // });

  FlowRouter.notFound = {
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<NotFound />)
      });
    }
  };

  FlowRouter.route('/register', {
    name: 'app.register',
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<Register />),
        requireNotLoggedIn: true
      });
    }
  });

  FlowRouter.route('/', {
    name: 'app.login',
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<Login />),
        requireNotLoggedIn: true
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'app.login',
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<Login />),
        requireNotLoggedIn: true
      });
    }
  });

  FlowRouter.route('/logout', {
    name: 'app.logout',
    action() {
      Accounts.logout();
      // Meteor.logout(() => {
      FlowRouter.go('/login');
      // });
    }
  });

  FlowRouter.route('/password', {
    name: 'app.password',
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<Password />)
      });
    }
  });

  FlowRouter.route('/account', {
    name: 'app.account',
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<Account />),
        requireUserId: true
      });
    }
  });

  FlowRouter.route('/profile', {
    name: 'app.profile',
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<Profile />),
        requireUserId: true
      });
    }
  });

}
