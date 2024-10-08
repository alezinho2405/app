import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const areas = ['Banheiro', 'Cozinha', 'Lavanderia', 'Área Externa'];

  return (
    <View style={styles.container}>
      {areas.map((area, index) => (
        <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate(area)}>
          <Text style={styles.cardText}>{area}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: '80%',
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
