import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import sixmonthsScreen from './sixmonths';
import TabTwoScreen from './(tabs)/second page';
import cookingScreen from './cooking';
import sixweekScreen from './sixweek';
import SewingScreen from './Sewing';
import LandScapingScreen from './LandScaping';
import LifeSkillsScreen from './LifeSkills';
import FirstAidScreen from './FirstAid';
import gardeningScreen from './gardening';
import childmindingScreen from './childminding';
import TabOneScreen from './(tabs)/home page';
import feesScreen from './fees';
import CalculateScreen from './(tabs)/calculate';

// import Home from './screens/Home';
// import Account from './screens/Account';
// import OfferPage from './screens/OfferPage';
// import SixMonth from './screens/CourseSummary/SixMonth';
// import SixWeek from './screens/CourseSummary/SixWeek';
// import FirstAid from './screens/Courses/FirstAid';
// import ChildMinding from './screens/Courses/ChildMinding';
// import Cooking from './screens/Courses/Cooking';
// import GardenMaintenance from './screens/Courses/GardenMaintenance';
// import Landscaping from './screens/Courses/Landscaping';
// import Lifeskills from './screens/Courses/Lifeskills';
// import Sewing from './screens/Courses/Sewing';
// import Checkout from './screens/Checkout';
// import { CartProvider } from './screens/CartContext';


const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={TabOneScreen} options={{ headerShown: false }} />
        <Stack.Screen name='SixWeek' component={sixweekScreen} options={{ headerShown: false }} />
        <Stack.Screen name='SixMonth' component={sixmonthsScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name='Account' component={Account} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='OfferPage' component={OfferPage} options={{ headerShown: false }} /> */}
        <Stack.Screen name='Childminding' component={childmindingScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Cooking' component={cookingScreen} options={{ headerShown: false }} />
        <Stack.Screen name='FirstAid' component={FirstAidScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Gardenmaintenance' component={gardeningScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Landscaping' component={LandScapingScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Lifeskills' component={LifeSkillsScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Sewing' component={SewingScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name='Checkout' component={Checkout} options={{headerShown: false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
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

