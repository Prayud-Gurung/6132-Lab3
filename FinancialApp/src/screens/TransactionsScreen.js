import * as React from "react"
import { View, Text, Button } from "react-native"
import ListItem from "../components/ListItem"
import { useSelector, useDispatch } from "react-redux"
import { databaseHelper } from "../utilities/firebase"
import { fetchDataSuccess } from "../reducers/TransactionsReducer"

const TransactionsScreen = ({ navigation }) => {

    const transactions = useSelector((store) => store.transaction)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')

    const dispatch = useDispatch()

    React.useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const fetchedItems = [];
        setLoading(true)
        setError('')

        await databaseHelper.transactionsList()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    var data = doc.data()
                    data.id = doc.id
                    fetchedItems.push(data)
                });
                dispatch(fetchDataSuccess(fetchedItems));
            })
            .catch((error) => {
                setError("Error fetching data")
            })
            .finally(() => {
                setLoading(false)
            })
        }

    if (loading) {
        return <Text>Loading...</Text>;
    }

    const renderedItems = (navigation) => transactions.map(item => (
        <ListItem key={item.id} transaction={item} navigation={navigation} />
    ));

    return (
        <View>
            {renderedItems(navigation)}
            <Button title="Add Transaction" onPress={() => navigation.navigate("AddTransaction")} />
        </View>
    );
}

export default (TransactionsScreen)