import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { Layout, ZoomIn, ZoomOut } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../global/Colors';

const ChapterNumber = ({ number, onPress }: any) => {
  return (
    <TouchableOpacity style={styles.chapterNumberView} onPress={onPress}>
      <Text style={styles.chapterNumberText}>{number}</Text>
    </TouchableOpacity>
  )
};

interface SelectProps {
  chapters: any;
  chapterNumber?: number;
  selectChapter?: (chapter: string) => void;
};

const Select = ({ chapters, chapterNumber, selectChapter }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<string | undefined>(); 

  const chooseChapter = (chapter: string) => {
    setSelectedChapter(chapter);
    if (selectChapter) {
      selectChapter(chapter);
    };
    setIsOpen(false);
  };

  return (
    <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
      <TouchableOpacity style={styles.selectView} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.selectText}>{chapterNumber ? chapterNumber : 'Chapters'}</Text>
        <Icon style={styles.selectArrow} name={isOpen ? 'arrow-upward' : 'arrow-downward'} />
      </TouchableOpacity>
      { isOpen ? 
        <Animated.View style={styles.selectScrollView} layout={Layout} entering={ZoomIn} exiting={ZoomOut}>
          <FlatList 
            data={chapters}
            keyExtractor={(item, index) => item.key}            
            renderItem={({ item }) => <ChapterNumber number={item} onPress={() => chooseChapter(item)} />}
          />
        </Animated.View>
        :
        false
      }
    </View>
  );
};

const styles = StyleSheet.create({
  selectView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 8,
  },
  selectText: {
    flex: 1,
    fontSize: 22,
    fontFamily: 'Inconsolata Regular Regular',
    color: Colors.white,
    marginHorizontal: 15
  },
  selectArrow: {
    fontSize: 22,
    fontFamily: 'Inconsolata Regular Regular',
    color: Colors.white,
    marginHorizontal: 15
  },
  selectScrollView: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.white,
    borderRadius: 8,
    height: 200
  },
  chapterNumberView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    borderBottomWidth: 1,
    borderColor: Colors.white
  },
  chapterNumberText: {
    fontSize: 24,
    fontFamily: 'Inconsolata Regular Regular',
    color: Colors.white,
  }
});

export default Select;