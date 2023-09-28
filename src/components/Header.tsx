import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AppIcon from '../assets/AppIcon.png';

import Colors from '../global/Colors';

interface HeaderProps {
  screenTitle?: string;
  headerScreen?: boolean;
  justBack?: boolean;
  searchPress?: any;
  goBackPress?: any;
  favoritePress?: any;
  isFavorite?: boolean;
};

const Header = ({ screenTitle, headerScreen, justBack, searchPress, goBackPress, favoritePress, isFavorite }: HeaderProps) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  if (headerScreen) {
    return (
      <View style={[styles.headerView, { justifyContent: 'space-between' }]}>
        <TouchableOpacity style={styles.appIcon} onPress={() => navigation.goBack()}>
          <Icon style={styles.icon} name='arrow-back-ios' />
        </TouchableOpacity>
        <Text numberOfLines={1} style={[styles.appTitle, { width: '62%', textAlign: 'center' }]}>{screenTitle}</Text>
        <TouchableOpacity style={styles.appIcon} onPress={favoritePress}>
          <Icon style={[styles.icon, { color: isFavorite ? Colors.red : Colors.white }]} name={isFavorite ? 'favorite' : 'favorite-border'} />
        </TouchableOpacity>
      </View>
    );
  };

  if (justBack) {
    return (
      <View style={[styles.headerView, { justifyContent: 'space-between' }]}>
         <TouchableOpacity style={styles.appIcon} onPress={() => navigation.goBack()}>
          <Icon style={styles.icon} name='arrow-back-ios' />
        </TouchableOpacity>
        <Text style={styles.appTitle}>{screenTitle}</Text>
        <View style={styles.appIcon} />
      </View>
    );
  };

  return (
    <View style={styles.headerView}>
      <Image style={styles.appIcon} source={AppIcon} />
      <Text style={[styles.appTitle, { flex: 1 }]}>Mangaká</Text>
      <TouchableOpacity style={styles.appIcon} onPress={searchPress}>
        <Icon style={[styles.icon, { fontSize: 38 }]} name='search' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.grey,
    marginBottom: 15,
  },
  appIcon: {
    justifyContent: 'center',
    width: 60,
    height: 60,
    marginHorizontal: 10,
    marginVertical: 15
  },
  appTitle: {
    fontSize: 28,
    fontFamily: 'Inconsolata Regular Regular',
    color: Colors.white
  },
  icon: {
    fontSize: 30,
    color: Colors.white,
    marginHorizontal: 15,
  },
});

export default Header;