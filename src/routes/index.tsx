import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import StackRoutes from "./stack.routes";

// Global
import Colors from "../global/Colors";

const Routes = () => {
  const defaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme,
      background: Colors.background
    }
  };

  return (
    <NavigationContainer theme={defaultTheme}>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;