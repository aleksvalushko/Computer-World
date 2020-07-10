import {combineReducers, createStore} from "redux";
import navigationReducer from "./navigationReducer";
import productsReducer from "./productsReducer";
import iconsReducer from "./iconsReducer";
import newsReducer from "./newsReducer";
import footerReducer from "./footerReducer";
import {reducer as formReducer} from "redux-form";

let reducers =combineReducers({
    navigation: navigationReducer,
    products: productsReducer,
    icons: iconsReducer,
    news: newsReducer,
    footer: footerReducer,
    form: formReducer
    }
);

let store = createStore(reducers);

export default store;