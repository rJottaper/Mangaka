import { useSharedValue, withTiming, Easing, useAnimatedStyle } from "react-native-reanimated";

const WelcomeController = () => {
  const animationValue = useSharedValue(0);

  animationValue.value = withTiming(1, { duration: 3000, easing: Easing.ease });

  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: animationValue.value,
    };
  });

  return { animationStyle };
};

export default WelcomeController;