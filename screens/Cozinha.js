import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cozinha = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à Cozinha!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Cozinha;
