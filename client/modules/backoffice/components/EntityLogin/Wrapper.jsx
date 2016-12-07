import React from 'react';

import dataComposer from '../../lib/AccountLogin.js';
import Component from './Component.jsx';
const ComponentCtx = dataComposer(Component);

export default class extends React.Component {

  render() {
    return (
      <div className="bs-docs-section clearfix">
          <div className="row">

              <div className="col-md-offset-4 col-md-4 col-md-offset-4">
                  <div className="ibox-content">
                    <h2 className="font-bold">Chupla Backoffice</h2>
                    <h3 className="font-bold">Login</h3>
                    <p>
                        Enter your email address and your password.
                    </p>


                    <ComponentCtx />

                    <a href="/password">
                        <small>Forgot password?</small>
                    </a>

                  </div>
              </div>
          </div>
          <hr/>
      </div>

    );
  }
}
