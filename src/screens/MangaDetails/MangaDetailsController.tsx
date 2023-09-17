import { useEffect, useState } from "react";
import { useSharedValue, withTiming, Easing, useAnimatedStyle } from "react-native-reanimated";

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
  const [selectedChapter, setSelectedChapter] = useState<string | undefined>()

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
    setSelectedChapter(chapter);
  };

  return { manga, mangaChapters, selectedChapter, handleSelectChapter, animationStyle };
};

export default MangaDetailsController;