import { StyleSheet, View, Text } from "react-native"


const TransactionDetail = ({route})=>{
    const { name, price, location, date } = route.params.transaction
    return(
        <View >
            <Text style={styles.title}>Transaction Detail</Text>

            <View>
                <Text style={styles.price}> $ {price}</Text>
                <Text>{name}</Text>
                <Text>{location}</Text>

                <Text>Date: {date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        padding: 10,
        backgroundColor: "skyblue"
    },

    price:{
        fontSize: 20
    }
});

export default TransactionDetail


