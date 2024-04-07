import React, { useState } from 'react';
import {Alert,Text, View, TextInput, TouchableOpacity,ImageBackground} from 'react-native';



export default function App(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    Alert.alert('Information', `Username: ${username}\nPassword: ${password}`);

  };
  return (
    <ImageBackground source={{ uri: 'https://i.imgur.com/yxPtSCkl.jpg' }} >

    <View className="h-full p-8 rounded shadow-md w-96">
          <View className='p-4 mt-40 bg-white rounded-2xl'>
            <View className="mb-4">
              <Text className='font-bold text-center'>2024802010433</Text>
            </View>
            <View className="mb-4">
              <TextInput  id="username"
                placeholder="Enter your username"
                onChangeText={text => setUsername(text)}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></TextInput>
            </View>
            <View className="mb-6">
              <TextInput
                id="password"
                placeholder="Enter your password"
                onChangeText={text => setPassword(text)}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></TextInput>
            </View>
          </View>
          <TouchableOpacity className="px-6 py-4 mt-5 bg-blue-500 rounded-lg" onPress={handleLogin}>
            <Text className='text-white'>Login</Text>
          </TouchableOpacity>
        </View>
    </ImageBackground>

  );
}
