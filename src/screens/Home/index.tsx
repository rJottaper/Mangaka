import { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import Colors from '../../global/Colors';

// Components
import Header from '../../components/Header';
import HightlightMangaCard from '../../components/HighlightMangaCard';
import MangaCard from '../../components/MangaCard';
import GenreMangaCard from '../../components/GenreMangaCard';

import HomeController from './HomeController';

const Welcome = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [test, setTest] = useState([
    { id: 1, mangaName: '', loading: false },
    { id: 2, mangaName: '', loading: false },
    { id: 3, mangaName: '', loading: false },
  ]);

  const { featuredMangaData, popularMangaData, romanceMangaData, genresMangaData } = HomeController();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.viewHighlightCards}>
          <Text style={[styles.mangaCategoryTexts, { marginTop: 0 }]}>Featured Manga</Text>
          <FlatList 
            data={featuredMangaData ? featuredMangaData : test}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }) => <HightlightMangaCard mangaImage={item.image} mangaName={item.title} mangaOnPress={() => navigation.navigate('MangaDetails', { id: item.id })} loading={item.image ? false : true} /> }
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.viewCards}>
          <Text style={styles.mangaCategoryTexts}>Popular</Text>      
          <FlatList 
            data={popularMangaData ? popularMangaData : test}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }) => <MangaCard mangaImage={item.image} mangaName={item.title} mangaOnPress={() => navigation.navigate('MangaDetails', { id: item.id })} loading={item.image ? false : true} /> }
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.viewCards}>
          <Text style={styles.mangaCategoryTexts}>Romance</Text>      
          <FlatList 
            data={romanceMangaData ? romanceMangaData : test}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }) => <MangaCard mangaImage={item.image} mangaName={item.title} mangaOnPress={() => navigation.navigate('MangaDetails', { id: item.id })} loading={item.image ? false : true} /> }
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* <View style={styles.viewCards}>
          <Text style={styles.mangaCategoryTexts}>Popular Genres</Text>      
          <FlatList 
            data={genresMangaData}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }) => <GenreMangaCard title={item?.title} /> }
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'flex-start' }}
            showsHorizontalScrollIndicator={false}
          />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewHighlightCards: {
    justifyContent: 'center',
    marginHorizontal: 15
  },
  mangaCategoryTexts: {
    fontSize: 24,
    fontFamily: 'Inconsolata Regular Regular',
    color: Colors.grey,
    marginTop: 30,
    marginBottom: 20,
  },
  viewCards: {
    justifyContent: 'center',
    marginHorizontal: 15
  },
});

export default Welcome;