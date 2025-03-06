import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Image, Dimensions, Button } from 'react-native';

const { width } = Dimensions.get('window');

// Données des slides
const slides = [
  {
    key: '1',
    title: 'Bienvenue !',
    description: 'Découvrez une nouvelle façon de suivre vos calories.',
    image: require('./assets/adaptive-icon.png'),
  },
  {
    key: '2',
    title: 'Analyse des aliments',
    description: 'Prenez une photo et obtenez les calories instantanément.',
    image: require('./assets/adaptive-icon.png'),
  },
  {
    key: '3',
    title: 'Historique personnalisé',
    description: 'Suivez vos progrès avec des rapports détaillés.',
    image: require('./assets/adaptive-icon.png'),
  },
];

export default function IntroScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(slideIndex);
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />
      {currentIndex === slides.length - 1 && (
        <View style={styles.buttonContainer}>
          <Button title="Commencer" onPress={() => navigation.navigate('Login')} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
});
