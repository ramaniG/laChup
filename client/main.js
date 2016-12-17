import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import sitesModule from './modules/sites';
// import usersModule from './modules/users';
// import servicesModule from './modules/services';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(sitesModule);
// app.loadModule(servicesModule);
// app.loadModule(usersModule);

app.init();
