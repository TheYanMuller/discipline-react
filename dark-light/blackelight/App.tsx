import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screen/login';
import { ThemeContextProvider } from './src/context/themeContext';

export default function App() {
  return (
    <ThemeContextProvider>
    <Login/>
    </ThemeContextProvider>
  );
}



