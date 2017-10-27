import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStoreInvariant from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlcklist, actionsCreators and other options if needed
});

export default function configureStore(initialState) {
    const logger = createLogger();
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(
                thunk, logger, reduxImmutableStoreInvariant()
            )
        )
    );
}