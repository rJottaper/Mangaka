import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Animated, { Layout, ZoomIn, ZoomOut } from 'react-native-reanimated';
import Colors from '../global/Colors';

interface GenreMangaCardProps {
  title: string;
  onPress?: any;
}

const GenreMangaCard = ({ title, onPress }: GenreMangaCardProps) => {
  return (
    <Animated.View layout={Layout} entering={ZoomIn} exiting={ZoomOut}>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width / 2.3,
    maxWidth: 180,
    height: 60,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 8,
    marginRight: 15,
    marginBottom: 15
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: 'Inconsolata Regular Regular',
    color: Colors.white,
  }
});

export default GenreMangaCard;