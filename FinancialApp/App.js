import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsScreen from './src/screens/TransactionsScreen';
import SummaryScreen from './src/screens/SummaryScreen';
import TransactionDetail from './src/screens/TransactionDetail';

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const StackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name="Transaction" component={TransactionsScreen} options={{ title: "Transactions" }} />

      <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{ title: "Transaction Detail" }} />

    </Stack.Navigator>
  )

  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Transactions" component={StackScreen} options={{
          headerShown: false
        }}/>

        <Tab.Screen name="Summary" component={SummaryScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

