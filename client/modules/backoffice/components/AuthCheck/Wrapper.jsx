import React from 'react';

import Component from './Component.jsx';
import {authComposer} from '/client/configs/composers.js';
const ComponentCtx = authComposer(Component);

import AuthLoading from '../AuthLoading/Wrapper.jsx';
import AuthDenied from '../AuthDenied/Wrapper.jsx';
import EntityLogin from '../EntityLogin/Wrapper.jsx';

export default class extends React.Component {

  render() {

    const {
      content,
      LayoutDefault,
      // LayoutComponent
    } = this.props;

    const displayLoading = () => (
      <LayoutDefault
        content={() => (<AuthLoading />)}
      />
    );

{/*    const displayLogin = () => (
      <LoginLayout
        content={() => (<EntityLogin />)}
      />
    );
*/}
    const displayDenied = () => (
      <LayoutDefault
        content={() => (<AuthDenied />)}
      />
    );

    const displayContent = () => (
      <LayoutDefault
        content={content}
      />
    );

    return (
      <ComponentCtx
        {...this.props}
        displayLoading={displayLoading}
        displayDenied={displayDenied}
        displayContent={displayContent}
      />
    );
  }
}
