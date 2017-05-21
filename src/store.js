import { createStore, combineReducers, applyMiddleware } from "redux"
import { routerReducer ,routerMiddleware } from "react-router-redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"
import rootSaga from "./sagas"
import rootReducer from "./reducers"

export default function createStoreWithHistory(history) {
    //create middlewares
    const sagaMiddleware = createSagaMiddleware()
    const reduxRouterMiddleware = routerMiddleware(history)

    //add middlewares to this array
    const middlewares = [sagaMiddleware, reduxRouterMiddleware]

    //create store
    let store = createStore(combineReducers(
        {...rootReducer, router: routerReducer}),
        composeWithDevTools(applyMiddleware(...middlewares))
    )

    sagaMiddleware.run(rootSaga)

    return store
}