import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';

import WelcomeImage from '../../assets/Welcome.svg'
import Button from '../../components/Button';
import Colors from '../../global/Colors';

import WelcomeController from './WelcomeController';

const Welcome = () => {
  const { animationStyle } = WelcomeController();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <View style={styles.viewImage}>
        <WelcomeImage width={Dimensions.get('screen').width / 1.2} />
      </View>
      <Animated.Text style={[styles.title, animationStyle]}>Mangaká</Animated.Text>
      <Animated.Text style={[styles.subtitle, animationStyle]}>Here you have your favorite manga in your hand.</Animated.Text>
      <Animated.View style={[styles.buttonView, animationStyle]}>
        <Button title='ACCESS' onPress={() => navigation.navigate('Home')} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  viewImage: {
    height: Dimensions.get('screen').height / 2.5,
    marginVertical: 15
  },
  title: {
    fontSize: 48,
    color: Colors.white,
    marginVertical: 15,
    fontFamily: 'Inconsolata Regular Regular'
  },
  subtitle: {
    fontSize: 32,
    fontFamily: 'Inconsolata Regular Regular',
    color: Colors.white,
    marginHorizontal: 20,
    marginVertical: 15,
    textAlign: 'center'
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    marginHorizontal: 20,
    marginBottom: 20,
  }
});

export default Welcome;