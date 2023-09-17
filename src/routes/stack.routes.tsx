import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Welcome from "../screens/Welcome";
import Home from '../screens/Home'
import MangaDetails from "../screens/MangaDetails";

const { Navigator, Screen } = createStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Home" component={Home} />
      <Screen name="MangaDetails" component={MangaDetails} />
    </Navigator>
  );
};

export default StackRoutes;

