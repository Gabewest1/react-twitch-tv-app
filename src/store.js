import { createStore, combineReducers, applyMiddleware } from "redux"
import { routerReducer ,routerMiddleware } from "react-router-redux"
import { createLogicMiddleware } from "redux-logic"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers"
import arrLogic from "./logic"
const logicDependencies = {}

export default function createStoreWithHistory(history) {
    //create middlewares
    const reduxRouterMiddleware = routerMiddleware(history)
    const logicMiddleware = createLogicMiddleware(arrLogic, logicDependencies)

    //add middlewares to this array
    const middlewares = [reduxRouterMiddleware, logicMiddleware]

    //create store
    let store = createStore(combineReducers(
        {...rootReducer, router: routerReducer}),
        composeWithDevTools(applyMiddleware(...middlewares))
    )

    // sagaMiddleware.run(rootSaga)

    return store
}