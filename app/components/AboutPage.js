import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={styles.logo}
      />
      <Text style={styles.title}>TeamX</Text>
    
      
      <View style={styles.content}>
        <Text style={styles.description}>
          TeamX is a group of three people. Our Team members are Yagya Niroula, Jacklyn Becker & Anamol Khanal.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 TeamX</Text>
        <Text style={styles.footerText}>All rights reserved</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  version: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  content: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#444',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
});

export default AboutPage; 