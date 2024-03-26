import { View, Text } from "react-native"


const TransactionDetail = ({route})=>{
    const { name, price, location } = route.params
    return(
        <View >
            <Text>Transaction Detail</Text>

            <View>
                <Text>{name}</Text>
                <Text>{price}</Text>
                <Text>{location}</Text>

                <Text>Date</Text>
            </View>
        </View>
    )
}

export default TransactionDetail