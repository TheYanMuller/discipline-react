
import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Clima {
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ],
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    }
}

export default function App() {
  const [weather, setWheater] = useState<Clima>()

  const getWeather = async () =>{
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=miami&appid=8b02f6119a7443fbcabd74f86230155f`)
      setWheater(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getWeather()
  } , [])

  return (
    <View>
      <Text>{weather?.main.temp}</Text>
      <Text>{weather?.main.feels_like}</Text>
      <Text>{weather?.weather[0].description}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
