import React from 'react';
import LeftMenu from './leftmenu.js'
import './style.css';

const Component = ({content = () => null }, {subcontent = () => null}) => (
  <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 col-md-2 sidebar">
          <LeftMenu />
        </div>
        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 className="page-header">Sites Maintenance</h1>
          {content()}
        </div>
      </div>
    </div>
  </div>
)

export default Component;
