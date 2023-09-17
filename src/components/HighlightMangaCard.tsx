import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Animated, { Layout, ZoomIn, ZoomOut } from 'react-native-reanimated';

import Colors from '../global/Colors';

interface HightlightMangaCardProps {
  mangaImage?: string;
  mangaName?: string;
  mangaOnPress?: any;
  loading?: boolean;
};

const HightlightMangaCard = ({ mangaImage, mangaName, mangaOnPress, loading }: HightlightMangaCardProps) => {
  if (loading) return <Animated.View layout={Layout} entering={ZoomIn} exiting={ZoomOut} style={styles.cardLoading} />

  return (
    <Animated.View layout={Layout} entering={ZoomIn} exiting={ZoomOut} style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={mangaOnPress}>
        { mangaImage ? <Image style={styles.mangaImage} source={{ uri: mangaImage }} /> : <View style={styles.mangaImage} /> }
      </TouchableOpacity>
      <View style={styles.viewMangaName}>
        <Text numberOfLines={1} style={styles.mangaNameText}>{mangaName}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  card: {
    width: Dimensions.get('screen').width / 1.2,
    height: 180,
    borderRadius: 12,
    backgroundColor: Colors.white,
    marginRight: 15
  },
  cardLoading: {
    width: Dimensions.get('screen').width / 1.2,
    height: 180,
    borderRadius: 12,
    backgroundColor: Colors.grey,
    marginRight: 15
  },
  mangaImage: {
    flex: 1,
    borderRadius: 12
  },
  viewMangaName: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: Dimensions.get('screen').width / 1.4,
    height: 30,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 6,
    backgroundColor: Colors.background,
    marginTop: -15,
    marginLeft: -15
  },
  mangaNameText: {
    textAlign: 'center',
    width: Dimensions.get('screen').width / 1.4,
    fontSize: 16,
    fontFamily: 'Inconsolata Regular Regular',
    color: Colors.white,
  }
});

export default HightlightMangaCard;