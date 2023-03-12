import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React, { useRef } from 'react'

const InfoScroll = ({ info }) => {
  const listRef = useRef(null);
  const scrollToItem = () => {
    listRef.current.scrollToIndex({ index: 6 });
  };

  return (
    <View>
      <TouchableOpacity onPress={() => scrollToItem()}>
        <Text>Scroll</Text>
      </TouchableOpacity>

      <View style={{height: 308}}>
        <FlatList
          style={{ flex: 1 }}
          ref={listRef}
          data={info}
          renderItem={({ item }) => <InfoScrollItem item={item} />}
        />
      </View>
    </View>
  );
};

const InfoScrollItem = ({ item }) => {

  return (
    <View>
      <Text>{item}</Text>
    </View>
  )
}

export default InfoScroll