import * as React from "react"
import { View, Text } from "react-native"
import { TotalTransactions, Balance, HighSpending, LowSpending } from "../reducers/TransactionsReducer"
import { useSelector } from "react-redux"

const SummaryScreen = ()=>{

    const totalTransactions = useSelector(TotalTransactions)
    const balance = useSelector(Balance)
    const highSpending = useSelector(HighSpending)
    const lowSpending = useSelector(LowSpending)

    return(
        <View>
            <Text>Summary</Text>

            <Text>Transactions: {totalTransactions}</Text>
            <Text>Balance: {"$" + balance}</Text>
            
            <Text>High Spending</Text>
            <View>
                <Text>{highSpending.name}</Text>
                <Text>{highSpending.price}</Text>
            </View>

            <Text>Low Spending</Text>
            <View>
                <Text>{lowSpending.name}</Text>
                <Text>{lowSpending.price}</Text>
            </View>
        </View>
    )
}

export default SummaryScreen