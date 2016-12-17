import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';

import backofficeModule from './modules/backoffice';
import superadminModule from './modules/superadmin';
// import appModule from './modules/app';
import sitesModule from './modules/sites';
// import usersModule from './modules/users';
// import servicesModule from './modules/services';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
// app.loadModule(appModule);
app.loadModule(backofficeModule);
app.loadModule(superadminModule);
app.loadModule(sitesModule);
// app.loadModule(servicesModule);
// app.loadModule(usersModule);

app.init();
