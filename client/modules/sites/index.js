import methodStubs from './configs/method_stubs';
import actions from './actions';
// import routes from './routes';

export default {
  actions,
  load(context) {
    methodStubs(context);
  }
};
