import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CalorieCounter() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [calories, setCalories] = useState(null);

  const pickImage = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      alert('Permission refusée pour accéder à la caméra.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
      analyzeImage(result.uri);
    }
  };

  const analyzeImage = async (imageUri) => {
    try {
      setLoading(true);
      setTimeout(() => {
        setCalories(Math.floor(Math.random() * 500) + 100); 
        setLoading(false);
      }, 2000);
    } catch (error) {
      alert('Erreur lors de l\'analyse.');
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compteur de Calories</Text>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Prendre une photo" onPress={pickImage} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {calories !== null && <Text style={styles.calories}>Calories estimées : {calories}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
  calories: {
    fontSize: 18,
    color: '#555',
    marginTop: 20,
  },
});
