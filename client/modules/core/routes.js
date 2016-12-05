import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './components/mainlayout';
import StateSelection from './containers/stateselection';
import NewSite from '../sites/containers/newsite.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'main',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<StateSelection countryID="1" />)
      });
    }
  });

  FlowRouter.route('/new-site', {
    name: 'newsite',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewSite countryID="1" />)
      });
    }
  });

}
