import { SafeAreaView, ScrollView, View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import Header from '../../components/Header';
import Colors from '../../global/Colors';

import Select from '../../components/Select';

import MangaDetailsController from './MangaDetailsController';

const MangaDetails = ({ route }: any) => {
  const Controller = MangaDetailsController(route.params);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header headerScreen screenTitle={Controller.manga ? Controller.manga.title : ''} />
        <View style={styles.viewMangaDetails}>
          { Controller.manga ? <Animated.Image style={[styles.mangaImage, Controller.animationStyle]} source={{ uri: Controller.manga.image }} /> : <Animated.View style={[styles.mangaImage, Controller.animationStyle]} /> }
          <Animated.View style={[styles.viewDetails, Controller.animationStyle]}>
            <Text numberOfLines={2} style={styles.mangaTitle}>{Controller.manga ? Controller.manga.title : ''}</Text>
            <Text style={styles.mangaChapters}>Chapters: {Controller.manga ? Controller.manga.chapters.length : ''}</Text>
            <Text style={[styles.mangaStatus, { color: Controller.manga ? Controller.manga.status === 'Completed' ? Colors.green : Colors.grey : Colors.green }]}>Status: {Controller.manga ? Controller.manga.status : ''}</Text>
          </Animated.View>
        </View>
        <Animated.View style={Controller.animationStyle}>
          <Select chapters={Controller.mangaChapters} chapterNumber={Controller.selectedChapter} selectChapter={Controller.handleSelectChapter} />
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewMangaDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
  },
  viewDetails: {
    width: '52%',
    alignItems: 'flex-start',
  },
  mangaImage: {
    width: Dimensions.get('screen').width / 2.5,
    height: 250,
    borderRadius: 10,
    backgroundColor: Colors.grey,
    marginTop: 15,
    marginRight: 15
  },
  mangaTitle: {
    flex: 1,
    fontSize: 28,
    fontFamily: 'Inconsolata Regular Regular',
    color: Colors.white,
    marginTop: 15
  },
  mangaChapters: {
    fontSize: 24,
    fontFamily: 'Inconsolata Regular Regular',
    color: Colors.grey,
  },
  mangaStatus: {
    fontSize: 24,
    fontFamily: 'Inconsolata Regular Regular',
    color: Colors.grey,
  }
});

export default MangaDetails;