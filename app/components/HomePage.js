import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomePage = ({ currentUser, navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to our App,</Text>
        <Text style={styles.userName}>{currentUser?.name || 'User'}</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.grid}>
          <TouchableOpacity 
            style={styles.gridItem}
            onPress={() => navigation.navigate('Gallery')}
          >
            <Ionicons name="images" size={32} color="#007AFF" />
            <Text style={styles.gridText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.gridItem}
            onPress={() => navigation.navigate('Tasks')}
          >
            <Ionicons name="list" size={32} color="#007AFF" />
            <Text style={styles.gridText}>Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.gridItem}
            onPress={() => navigation.navigate('About')}
          >
            <Ionicons name="information-circle" size={32} color="#007AFF" />
            <Text style={styles.gridText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.gridItem}
            onPress={() => navigation.navigate('Contact')}
          >
            <Ionicons name="mail" size={32} color="#007AFF" />
            <Text style={styles.gridText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  welcomeText: {
    fontSize: 24,
    color: '#333',
    marginBottom: 5,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  content: {
    padding: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  gridText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default HomePage; 