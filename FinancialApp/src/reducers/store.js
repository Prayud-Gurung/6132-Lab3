import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './TransactionsReducer';

console.log();

const store = configureStore({
    reducer: {transaction: transactionsReducer}
});

export default store;