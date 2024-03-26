import * as React from "react"
import { View, Text } from "react-native"
import ListItem from "../components/ListItem"


const TransactionsScreen = ({navigation})=>{
    return(
        <View>
            <Text>Transactions List</Text>
            <ListItem name="Tim Hortons" price="20" navigation={navigation}/>
        </View>
    )
}

export default TransactionsScreen



