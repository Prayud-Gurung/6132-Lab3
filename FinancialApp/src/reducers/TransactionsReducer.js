import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect';
export const transactionsReducer = createSlice({
    name: 'transaction',
    initialState: [],
    reducers: {
        fetchDataSuccess: (state, action) => {
            return action.payload
        },
        addTransaction: (state, action) => {
			state.push(action.payload)
		}
    }
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

export const { fetchDataSuccess, addTransaction } = transactionsReducer.actions;

export default transactionsReducer.reducer