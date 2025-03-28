import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const WelcomePage = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://picsum.photos/1200/2400' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>TeamX</Text>
            <Text style={styles.subtitle}>
              One Team, One Dream
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.signInButton]}
              onPress={() => navigation.navigate('SignIn')}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.signUpButton]}
              onPress={() => navigation.navigate('SignUp')}
            >
              <Text style={[styles.buttonText, styles.signUpText]}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  headerContainer: {
    marginTop: '40%',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.8,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 50,
  },
  button: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: '#007AFF',
  },
  signUpButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signUpText: {
    color: '#fff',
  },
});

export default WelcomePage; 