import {combineReducers, createStore} from "redux";
import navigationReducer from "./navigationReducer";
import productsReducer from "./productsReducer";
import iconsReducer from "./iconsReducer";
import newsReducer from "./newsReducer";
import footerReducer from "./footerReducer";

let reducers =combineReducers({
    navigation: navigationReducer,
    products: productsReducer,
    icons: iconsReducer,
    news: newsReducer,
    footer: footerReducer
    }
);

let store = createStore(reducers);

export default store;