import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './components/mainlayout';
import StateSelection from './containers/stateselection';
import NewSite from '../sites/containers/newsite.js';
import SiteMaintenance from '../sites/components/sitemaintenance.js';

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
