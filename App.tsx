import React from 'react';
import {Text, View, TextInput,TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View className="p-8 bg-white rounded shadow-md w-96">
      <View>
        <View className="mb-4">
          <TextInput  id="username"
            placeholder="Enter your username"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></TextInput>
        </View>
        <View className="mb-6">
          <TextInput
            id="password"
            placeholder="Enter your password"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></TextInput>
        </View>
      </View>
      <TouchableOpacity className="px-6 py-4 bg-blue-500 rounded-lg">
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
