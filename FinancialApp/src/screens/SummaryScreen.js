import * as React from "react"
import { StyleSheet, View, Text } from "react-native"
import { TotalTransactions, Balance, HighSpending, LowSpending } from "../reducers/TransactionsReducer"
import { useSelector } from "react-redux"

const SummaryScreen = ()=>{

    const totalTransactions = useSelector(TotalTransactions)
    const balance = useSelector(Balance)
    const highSpending = useSelector(HighSpending)
    const lowSpending = useSelector(LowSpending)

    return(
        <View>
            <Text style={styles.title}>Summary</Text>

            <Text>Transactions: {totalTransactions}</Text>
            <Text>Balance: {"$" + balance}</Text>
            
            <Text style={styles.subTitle}>High Spending</Text>
            <View style={styles.item}>
                <Text>{highSpending.name}</Text>
                <Text>{highSpending.price}</Text>
            </View>

            <Text style={styles.subTitle}>Low Spending</Text>
            <View style={styles.item}>
                <Text>{lowSpending.name}</Text>
                <Text>{lowSpending.price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        padding: 10,
        backgroundColor: "skyblue"
    },
    subTitle: {
        padding: 10,
        backgroundColor: "lightgreen"
    },
    item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    }
});

export default SummaryScreen