import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Auth screens
import WelcomePage from './app/components/auth/WelcomePage';
import SignInPage from './app/components/auth/SignInPage';
import SignUpPage from './app/components/auth/SignUpPage';

// App screens
import HomePage from './app/components/HomePage';
import ProfilePage from './app/components/ProfilePage';
import GalleryPage from './app/components/GalleryPage';
import TasksPage from './app/components/TasksPage';
import AboutPage from './app/components/AboutPage';
import ContactPage from './app/components/ContactPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Mock user credentials
const MOCK_USER = {
  name: 'Demo User',
  email: 'demo@example.com',
  password: 'demo123'
};

// Main app tab navigation
function MainAppTabs({ currentUser, onSignOut }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'Gallery':
              iconName = focused ? 'images' : 'images-outline';
              break;
            case 'Tasks':
              iconName = focused ? 'list' : 'list-outline';
              break;
            case 'About':
              iconName = focused ? 'information-circle' : 'information-circle-outline';
              break;
            case 'Contact':
              iconName = focused ? 'mail' : 'mail-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home">
        {(props) => (
          <HomePage
            {...props}
            currentUser={currentUser}
          />
        )}
      </Tab.Screen>
      <Tab.Screen 
        name="Profile" 
        options={{
          tabBarLabel: 'Profile',
        }}
      >
        {(props) => (
          <ProfilePage
            {...props}
            currentUser={currentUser}
            onSignOut={onSignOut}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Gallery" component={GalleryPage} />
      <Tab.Screen name="Tasks" component={TasksPage} />
      <Tab.Screen name="About" component={AboutPage} />
      <Tab.Screen name="Contact" component={ContactPage} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Load users from AsyncStorage when app starts
  useEffect(() => {
    loadUsers();
  }, []);

  // Function to load users from AsyncStorage
  const loadUsers = async () => {
    try {
      const storedUsers = await AsyncStorage.getItem('users');
      if (storedUsers) {
        const parsedUsers = JSON.parse(storedUsers);
        // Check if mock user exists
        const mockUserExists = parsedUsers.some(user => user.email === MOCK_USER.email);
        if (!mockUserExists) {
          // Add mock user if it doesn't exist
          const updatedUsers = [...parsedUsers, MOCK_USER];
          setUsers(updatedUsers);
          saveUsers(updatedUsers);
        } else {
          setUsers(parsedUsers);
        }
      } else {
        // If no users exist, add mock user
        setUsers([MOCK_USER]);
        saveUsers([MOCK_USER]);
      }
    } catch (error) {
      console.error('Error loading users:', error);
      // If there's an error, add mock user
      setUsers([MOCK_USER]);
      saveUsers([MOCK_USER]);
    }
  };

  // Function to save users to AsyncStorage
  const saveUsers = async (updatedUsers) => {
    try {
      await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
    } catch (error) {
      console.error('Error saving users:', error);
    }
  };

  const handleSignUp = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    saveUsers(updatedUsers);
  };

  const handleSignIn = (email, password) => {
    const user = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isAuthenticated ? (
          // Auth Stack
          <>
            <Stack.Screen name="Welcome" component={WelcomePage} />
            <Stack.Screen name="SignIn">
              {(props) => (
                <SignInPage
                  {...props}
                  onSignIn={handleSignIn}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="SignUp">
              {(props) => (
                <SignUpPage
                  {...props}
                  onSignUp={handleSignUp}
                />
              )}
            </Stack.Screen>
          </>
        ) : (
          // App Stack
          <Stack.Screen name="MainApp">
            {(props) => (
              <MainAppTabs
                {...props}
                currentUser={currentUser}
                onSignOut={handleSignOut}
              />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
