import { StyleSheet, Text, TouchableOpacity } from "react-native"

const ListItem = (props)=> {
    const params = {
        name: 'tims',
        location: "121 lyman",
        price: "10.00"
    }
    
    return (
        <TouchableOpacity style={styles.list} onPress={() => props.navigation.navigate("TransactionDetail", params)}>
            <Text>{props.name}</Text>
            <Text>{props.price}</Text>
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