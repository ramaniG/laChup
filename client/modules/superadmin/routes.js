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

import EntityRegister from './components/EntityRegister/Wrapper.jsx';

export default function (injectDeps, {FlowRouter}) {

  const AuthCheckCtx = injectDeps(AuthCheck);

  FlowRouter.route('/create-entity', {
    name: 'app.createEntity',
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<EntityRegister />),
        requireUserId: true,
        requiredRole: ['super-admin'],
        requiredGroup: 'super-admin'
      });
    }
  });

}
