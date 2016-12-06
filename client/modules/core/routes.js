import React from 'react';
import { mount } from 'react-mounter';
import { Meteor } from 'meteor/meteor';

import MainLayout from './components/mainlayout';
import FacebookLogin from './containers/facebooklogin';
import Registration from './containers/registration';
import EntityTypeSelection from './containers/entitytypeselection';
import EntitySelection from './containers/entityselection';
import SiteSelection from './containers/siteselection';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'main',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<FacebookLogin />)
      });
    }
  });

  FlowRouter.route('/registeruser', {
    name: 'registeruser',
    action() {
      if (Meteor.userId()) {
        mount(MainLayoutCtx, {
            content: () => (<Registration />)
        });
      } else {
        FlowRouter.go('main');
      }
    }
  });

  FlowRouter.route('/entitytypeselect', {
    name: 'entitytypeselect',
    action() {
      console.log(Meteor.userId());
      if (Meteor.userId()) {
        mount(MainLayoutCtx, {
            content: () => (<EntityTypeSelection />)
        });
      } else {
        FlowRouter.go('main');
      }
    }
  });

  FlowRouter.route('/entityselect/:id', {
    name: 'entityselect',
    action(param) {
      if (Meteor.userId()) {
        mount(MainLayoutCtx, {
            content: () => (<EntitySelection pEntitytypeid={param.id} />)
        });
      } else {
        FlowRouter.go('main');
      }
    }
  });

  FlowRouter.route('/siteselect/:id', {
    name: 'siteselect',
    action(param) {
      console.log(param.id);
      if (Meteor.userId()) {
        mount(MainLayoutCtx, {
            content: () => (<SiteSelection pEntityId={param.id} />)
        });
      } else {
        FlowRouter.go('main');
      }
    }
  });
}
