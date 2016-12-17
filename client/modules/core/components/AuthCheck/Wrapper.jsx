import React from 'react';

import Component from './Component.jsx';
import {authComposer} from '/client/configs/composers.js';
const ComponentCtx = authComposer(Component);

// import AuthLoading from '../AuthLoading/Wrapper.jsx';
// import AuthDenied from '../AuthDenied/Wrapper.jsx';
// import EntityLogin from '/client/modules/backoffice/components/EntityLogin/Wrapper.jsx';

export default class extends React.Component {

  render() {

    const {
      content,
      LayoutDefault
    } = this.props;

    const displayContent = () => (
      <LayoutDefault
        content={content}
      />
    );

    return (
      <ComponentCtx
        {...this.props}
        displayContent={displayContent}
      />
    );
  }
}
