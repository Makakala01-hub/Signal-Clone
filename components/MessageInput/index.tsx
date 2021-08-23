import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  Feather,
  AntDesign,
  Ionicons,
} from '@expo/vector-icons';

const index = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    // send Message
    console.warn('sending: ', message);

    setMessage('');
  };

  const onPlusClicked = () => {
    console.warn('On plus clicked');
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        style={styles.root}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
      >
        <View style={styles.inputContainer}>
          <SimpleLineIcons
            name="emotsmile"
            size={24}
            color="#595959"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Signal message"
            value={message}
            onChangeText={setMessage}
          />
          <Feather
            name="camera"
            size={24}
            color="#595959"
            style={styles.icon}
          />
          <MaterialCommunityIcons
            name="microphone-outline"
            size={24}
            color="#595959"
            style={styles.icon}
          />
        </View>
        <Pressable onPress={onPress} style={styles.buttonContainer}>
          {message ? (
            <Ionicons name="send" size={20} color="white" />
          ) : (
            <AntDesign name="plus" size={20} color="white" />
          )}
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
  },
  inputContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#dedede',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#3777f0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 35,
  },
});
