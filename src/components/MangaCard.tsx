import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import Animated, { Layout, ZoomIn, ZoomOut } from 'react-native-reanimated';

import Colors from '../global/Colors';

interface MangaCardProps {
  mangaImage?: string;
  mangaName?: string;
  mangaOnPress?: any;
  loading?: boolean;
};

const MangaCard = ({ mangaImage, mangaName, mangaOnPress, loading }: MangaCardProps) => {
  if (loading) return <Animated.View layout={Layout} entering={ZoomIn} exiting={ZoomOut} style={styles.cardLoading} />

  return (
    <Animated.View layout={Layout} entering={ZoomIn} exiting={ZoomOut} style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={mangaOnPress}>
        <Image style={{ flex: 1 }} source={{ uri: mangaImage }} />
      </TouchableOpacity>
      <Text numberOfLines={2} style={styles.mangaText}>{mangaName}</Text>
    </Animated.View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card: {
    width: Dimensions.get('screen').width / 2.8,
    height: 200,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginRight: 15,
    marginBottom: 10,
    padding: 5,
  },
  cardLoading: {
    width: Dimensions.get('screen').width / 2.8,
    height: 200,
    borderRadius: 10,
    backgroundColor: Colors.grey,
    marginRight: 15
  },
  mangaText: {
    flex: 1,
    textAlign: 'center',
    width: Dimensions.get('screen').width / 2.8,
    fontSize: 20,
    fontFamily: 'Inconsolata Regular Regular',
    color: Colors.white,
  },
});

export default MangaCard;