import { configureStore } from '@reduxjs/toolkit';
// 导入子级reducer
import menuReducer from './slice/menu';
import accountReducer from './slice/account';

const store = configureStore({
    reducer: {
        menu: menuReducer,
        account: accountReducer,
    },
});

export default store;
