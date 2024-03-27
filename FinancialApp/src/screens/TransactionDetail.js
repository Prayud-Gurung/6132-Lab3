import { View, Text } from "react-native"


const TransactionDetail = ({route})=>{
    const { name, price, location, date } = route.params.transaction
    return(
        <View >
            <Text>Transaction Detail</Text>

            <View>
                <Text>{name}</Text>
                <Text>{price}</Text>
                <Text>{location}</Text>

                <Text>{date}</Text>
            </View>
        </View>
    )
}

export default TransactionDetail


