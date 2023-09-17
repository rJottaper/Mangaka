import { useEffect, useState } from "react";

import API from "../../services/API";

const HomeController = () => {
  const [genresMangaData, setGenreMangaData] = useState([
    { id: 1, title: 'Fantasy' },
    { id: 2, title: 'Romance' },
    { id: 3, title: 'Action' },
    { id: 4, title: 'Adventure' },
  ]);

  const [featuredMangaData, setFeaturedMangaData]: any = useState();
  const [popularMangaData, setPopularMangaData]: any = useState();
  const [romanceMangaData, setRomanceMangaData]: any = useState();

  const getFeaturedMangas = async () => {
    try {
      const { data }: any = await API.get('mangadex/berserk');
      const mangaDetails: any = await getFullDetails(data?.results.map((item: any) => item.id));

      setFeaturedMangaData(mangaDetails);
    } catch (error) {
      console.log('Failed: ', error);
    };
  };

  const getPopularMangas = async () => {
    try {
      const { data }: any = await API.get('mangadex/naruto');
      const mangaDetails: any = await getFullDetails(data?.results.map((item: any) => item.id));

      setPopularMangaData(mangaDetails);
    } catch (error) {
      console.log('Failed: ', error);
    };
  };

  const getRomanceMangas = async () => {
    try {
      const { data }: any = await API.get('mangadex/married&couple');
      const mangaDetails: any = await getFullDetails(data?.results.map((item: any) => item.id));

      setRomanceMangaData(mangaDetails);
    } catch (error) {
      console.log('Failed: ', error);
    };
  };

  useEffect(() => {
    getFeaturedMangas();
    getPopularMangas();
    getRomanceMangas();
  }, []);

  const getFullDetails = async (mangasID: any) => {
    const mangaDetails = await Promise.all(
      mangasID?.map(async (item: any) => {
        const { data }: any = await API.get(`mangadex/info/${item}`);
        return data;
      })
    );
  
    return mangaDetails;
  };

  return { featuredMangaData, popularMangaData, romanceMangaData, genresMangaData };
};

export default HomeController;