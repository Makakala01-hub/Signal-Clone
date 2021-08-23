/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {
  ColorSchemeName,
  Text,
  View,
  Image,
  useWindowDimensions,
} from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';

import HomeScreen from '../screens/HomeScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';

import LinkingConfiguration from './LinkingConfiguration';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: props => <HomeHeader {...props} /> }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          headerTitle: props => <ChatRoomHeader {...props} />,
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#3872E9',
          },
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}

const HomeHeader = props => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width,
        padding: 10,
        alignItems: 'center',
      }}
    >
      <Image
        // source={{
        //   uri:
        // 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/biahaze.jpg',
        //}}
        source={require('../assets/images/winnie2.jpg')}
        style={{ width: 40, height: 40, borderRadius: 40 }}
      />
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          marginLeft: 50,
          fontWeight: 'bold',
        }}
      >
        Signal
      </Text>
      <Feather
        name="camera"
        size={24}
        color="black"
        style={{ marginHorizontal: 10 }}
      />
      <Feather
        name="edit-2"
        size={24}
        color="black"
        style={{ marginHorizontal: 10 }}
      />
    </View>
  );
};

const ChatRoomHeader = props => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width - 25,
        marginLeft: 25,
        padding: 10,
        alignItems: 'center',
      }}
    >
      <Image
        // source={{
        //   uri:
        // 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/biahaze.jpg',
        //}}
        source={require('../assets/images/winnie2.jpg')}
        style={{ width: 40, height: 40, borderRadius: 40 }}
      />
      <Text
        style={{
          flex: 1,
          marginLeft: 10,
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        {props.children}
      </Text>
      <FontAwesome5
        name="video"
        size={24}
        color="white"
        style={{ marginHorizontal: 10 }}
      />
      <Ionicons
        name="call"
        size={24}
        color="white"
        style={{ marginHorizontal: 10 }}
      />
      <MaterialCommunityIcons
        name="dots-vertical"
        size={24}
        color="white"
        style={{ marginHorizontal: 10 }}
      />
    </View>
  );
};
