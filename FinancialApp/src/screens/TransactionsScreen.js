import * as React from "react"
import { View, Text } from "react-native"
import ListItem from "../components/ListItem"
import { useSelector } from "react-redux"

const TransactionsScreen = ({navigation})=>{

    const transactions = useSelector((store) => store.transaction)
    console.log(transactions)

    return(
        <View>
            <Text>Transactions List</Text>

            {transactions.map(transaction => (
                <ListItem key={transaction.id} navigation={navigation} transaction={transaction}/>
            ))}
        </View>
    )
}

export default (TransactionsScreen)