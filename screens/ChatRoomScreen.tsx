import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Message from '../components/Message';
import MessageInput from '../components/MessageInput';
import chatRoomData from '../assets/dummy-data/Chats';

import { useRoute, useNavigation } from '@react-navigation/core';

export default function TabTwoScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  console.warn('Displace chat room:', route.params?.id);

  navigation.setOptions({ title: 'Winnie Alex Mwacha' });

  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
