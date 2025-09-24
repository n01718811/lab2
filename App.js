import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {HomeScreen} from './src/screens';
import Colors from './src/constants/Colors';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: Colors.background},
});
