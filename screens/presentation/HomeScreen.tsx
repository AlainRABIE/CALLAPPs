import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    title: 'Bienvenue !',
    description: 'Découvrez une nouvelle façon de suivre vos calories.',
    image: require('./assets/page1.png'), 
  },
  {
    key: '2',
    title: 'Analyse des aliments',
    description: 'Prenez une photo et obtenez les calories instantanément.',
    image: require('./assets/page2.png'),
  },
  {
    key: '3',
    title: 'Historique personnalisé',
    description: 'Suivez vos progrès avec des rapports détaillés.',
    image: require('./assets/page3.png'),
  },
];

// Composant principal
export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={slides}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
  },
});
