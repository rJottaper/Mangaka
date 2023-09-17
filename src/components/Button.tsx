import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Colors from '../global/Colors';

interface ButtonProps {
  title: string;
  onPress: any;
  disable?: boolean;
};

const Button = ({ title, onPress, disable }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} disabled={disable}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 20
  },
  title: {
    fontSize: 20,
    fontFamily: 'Inconsolata Regular Regular',
    color: Colors.background
  }
});

export default Button;