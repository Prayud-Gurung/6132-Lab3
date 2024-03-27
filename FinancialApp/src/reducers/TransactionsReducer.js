import transactions from '../../assets/transactions';
import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect';

export const transactionsReducer = createSlice({
    name: 'transaction',
    initialState: transactions,
    reducers: {

    },
})

export const selectTransaction = state => state.transaction;

export const TotalTransactions = () => {
    return selectTransaction.length;
}

export const Balance = (state) => {
    return state.transaction.reduce((total, { price }) => total + parseFloat(price), 0);
}

export const HighSpending = createSelector(
    selectTransaction, transactions => {
        if (transactions.length === 0) {
            return null;
        }

        return transactions.reduce((max, current) => {

            const currentAmount = parseFloat(current.price);
            const maxAmount = parseFloat(max.price);

            return currentAmount > maxAmount ? current : max;
        });
    }
);

// Reselect Selector
export const LowSpending = createSelector(
    selectTransaction, transactions => {
        if (transactions.length === 0) {
            return null;
        }

        return transactions.reduce((min, current) => {

            const currentAmount = parseFloat(current.price);
            const minAmount = parseFloat(min.price);

            return currentAmount < minAmount ? current : min;
        });
    }
);











// export const HighSpending = createSelector(
// 	state => state.transaction,
// 	transactions => {
// 		if (transactions.length === 0) return null;
// 		return transactions.reduce((max, current) => {
// 			return parseFloat(current.price) > parseFloat(max.price) ? current : max;
// 		});
// 	}
// );

// export const LowSpending = createSelector(
// 	state => state.transaction,
// 	transactions => {
// 		if (transactions.length === 0) return null;
// 		return transactions.reduce((min, current) => {
// 			return parseFloat(current.price) < parseFloat(min.price) ? current : min;
// 		});
// 	}
// );

export default transactionsReducer.reducer;