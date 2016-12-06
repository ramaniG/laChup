import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './components/mainlayout';
import StateSelection from './containers/stateselection';

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
}
