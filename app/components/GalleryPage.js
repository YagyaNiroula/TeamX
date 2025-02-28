import React from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const GalleryPage = () => {
  const images = [
    'https://picsum.photos/200/200?random=1',
    'https://picsum.photos/200/200?random=2',
    'https://picsum.photos/200/200?random=3',
    'https://picsum.photos/200/200?random=4',
    'https://picsum.photos/200/200?random=5',
    'https://picsum.photos/200/200?random=6',
    'https://picsum.photos/200/200?random=7',
    'https://picsum.photos/200/200?random=8',
    'https://picsum.photos/200/200?random=9',
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.gallery}>
        {images.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image
              source={{ uri: image }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');
const imageSize = (width - 40) / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  imageContainer: {
    padding: 5,
    width: imageSize + 10,
    height: imageSize + 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default GalleryPage; 