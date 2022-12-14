import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "./pages/HomePage";
// import { Map } from "./pages/MapPage";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={Home} />
        {/* <Stack.Screen name="map" component={Map} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};