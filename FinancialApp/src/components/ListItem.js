import { StyleSheet, Text, TouchableOpacity } from "react-native"

const ListItem = ({transaction, navigation})=> {    
    return (
        <TouchableOpacity style={styles.list} onPress={() => navigation.navigate("TransactionDetail", {transaction: transaction})}>
            <Text>{transaction.name}</Text>
            <Text>{transaction.price}</Text>
        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    list: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
});