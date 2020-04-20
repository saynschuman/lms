import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
  return {
    ...createStore(rootReducer, {}, enhancer),
    runSaga: sagaMiddleware.run
  };
};

export default configureStore();
