import React from 'react';
import { LogBox, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import firebase from 'firebase';
import { firebaseConfig } from './env';

import { MemoListScreen } from './src/screens/MemoListScreen';
import { MemoDetailScreen } from './src/screens/MemoDetailScreen';
import { MemoEditScreen } from './src/screens/MemoEditScreen';
import { MemoCreateScreen } from './src/screens/MemoCreateScreen';
import { LogInScreen } from './src/screens/LogInScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { BackButton } from './src/components/BackButton';

const Stack = createStackNavigator();

LogBox.ignoreLogs(['Setting a timer']);

require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const styles = StyleSheet.create({
  header: {
    height: 104,
    backgroundColor: '#4EBFB8',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: { color: 'white' },
          headerTitle: 'PersonalNote',
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerBackTitle: '戻る',
          headerBackTitleVisible: true,
          headerBackImage: () => {
            return <BackButton />;
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen
          name="MemoEdit"
          component={MemoEditScreen}
          stack={Stack}
        />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen
          name="LogIn"
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
          component={LogInScreen}
        />
        <Stack.Screen
          name="SignUp"
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
          component={SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
