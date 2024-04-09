import * as React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { databaseHelper } from "../utilities/firebase";
import { useDispatch } from "react-redux";
import { addTransaction } from "../reducers/TransactionsReducer";

const AddTransactionScreen = ({navigation})=>{
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [date, setDate] = React.useState('');
    const [location, setLocation] = React.useState('');

    const dispatch = useDispatch()

    const handleAddTransaction = async (navigation)=>{
        const transaction = {
            name: name,
            price: price,
            date: date,
            location: location
        }

		const docRef = await databaseHelper.addTransaction(transaction);
        console.log(docRef.id)
        const addedTransaction = { id: docRef.id, ...transaction };

        dispatch(addTransaction(addedTransaction))
        navigation.goBack()
    }

    return(
        <View>
            <Text style={styles.title} >Name</Text>
            <TextInput style={styles.inputText} placeholder="name" onChangeText={(text)=> setName(text)} value={name}/>

            <Text style={styles.title} >Price</Text>
            <TextInput style={styles.inputText} placeholder="price" onChangeText={(text)=>setPrice(text)} value={price}/>

            <Text style={styles.title} >Date</Text>
            <TextInput style={styles.inputText} placeholder="date" onChangeText={(text)=>setDate(text)} value={date}/>
            
            <Text style={styles.title} >Location</Text>
            <TextInput style={styles.inputText} placeholder="location" onChangeText={(text)=>setLocation(text)} value={location}/>

            <Button title="Add" onPress={ () => handleAddTransaction(navigation)}/>

        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        padding: 10,
    },
    inputText: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        margin: 10
    }
});

export default AddTransactionScreen