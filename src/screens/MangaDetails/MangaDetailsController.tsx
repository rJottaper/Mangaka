import { useEffect, useState } from "react";
import { useSharedValue, withTiming, Easing, useAnimatedStyle } from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";

import API from "../../services/API";

interface MangaProps {
  id: string;
  title: string;
  image: string;
  status: string;
  description: any;
  chapters: any;
};

const MangaDetailsController = ({ id }: any) => {
  const [manga, setManga] = useState<MangaProps>();
  const [mangaChapters, setMangaChapters]: any = useState([]);
  const [selectedChapter, setSelectedChapter] = useState<number | undefined>();
  const [mangaPages, setMangaPages] = useState();
  const [isFavorite, setIsFavorite] = useState(false);

  const getMangaDetails = async () => {
    const { data }: any = await API.get(`mangadex/info/${id}`);
    
    setManga(data);
  };

  useEffect(() => {
    getMangaDetails();
  }, [id]);

  const getMangaNumberChapters = () => {
    manga?.chapters.map((item: any) => {
      setMangaChapters((oldData: any) => [...oldData, item.chapterNumber]);
    });
  };

  useEffect(() => {
    getMangaNumberChapters();
  }, [manga]);

  const animationValue = useSharedValue(0);
  animationValue.value = withTiming(1, { duration: 2500, easing: Easing.ease });

  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: animationValue.value,
    };
  });

  const handleSelectChapter = (chapter: string) => {
    setSelectedChapter(parseInt(chapter));
  };

  const nextChapter = () => {
    if (selectedChapter) {
      setSelectedChapter(selectedChapter + 1)
    };
  };

  const previousChapter = () => {
    if (selectedChapter) {
      setSelectedChapter(selectedChapter - 1)
    };
  };

  const getChapter = async () => {
    try {
      // const { data } = await API.get(`mangadex/read/${id}/${selectedChapter}`);
      const { data } = await API.get(`mangadex/read/5f7891b4-f048-4516-9c75-7bcd6dbd1451`);
      setMangaPages(data);
    } catch (error) {
      console.warn(error);
    };
  };

  useEffect(() => {
    if (selectedChapter !== undefined) getChapter();
  }, [selectedChapter]);

  const addFavoriteManga = async () => {
    const newFavoriteMangaToBeSaved = { id: id, title: manga?.title, image: manga?.image };
    const getFavoritesManga: any = await AsyncStorage.getItem('favoritesManga');
    
    let favoritesMangaFormatted = JSON.parse(getFavoritesManga);
    if (!favoritesMangaFormatted) {
      favoritesMangaFormatted = [];
      favoritesMangaFormatted.push(newFavoriteMangaToBeSaved);
    } else {
      const isMangaInFavorite = favoritesMangaFormatted.some((item: any) => item.id == id);

      if (!isMangaInFavorite) {
        favoritesMangaFormatted.push(newFavoriteMangaToBeSaved);
        setIsFavorite(true);
      };
    };

    await AsyncStorage.setItem('favoritesManga', JSON.stringify(favoritesMangaFormatted));
  };

  const removeFavoriteManga = async () => {
    const getFavoritesManga: any = await AsyncStorage.getItem('favoritesManga');
    let favoritesMangaFormatted = JSON.parse(getFavoritesManga);

    const removedFavoriteManga = favoritesMangaFormatted.filter((item: any) => item.id !== id);
    console.warn(removedFavoriteManga);

    await AsyncStorage.setItem('favoritesManga', JSON.stringify(removedFavoriteManga)).then(() => {
      setIsFavorite(false);
    });
  };

  useEffect(() => {
    const mangaIsFavorite = async () => {
      const getFavoritesManga: any = await AsyncStorage.getItem('favoritesManga');
      let favoritesMangaFormatted = JSON.parse(getFavoritesManga);

      favoritesMangaFormatted.map((item: any) => item.id === id ? setIsFavorite(true) : false);
    };

    mangaIsFavorite();
  }, []);

  return { manga, mangaChapters, selectedChapter, handleSelectChapter, mangaPages, nextChapter, previousChapter, addFavoriteManga, removeFavoriteManga, isFavorite, animationStyle };
};

export default MangaDetailsController;