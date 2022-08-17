import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

import MapView from 'react-native-maps';
import * as Location from 'expo-location'

const App = () =>  {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      showUserLocation // mostra a posição do usuário com um pontinho
      loadingEnabled //só aparece o mapa quando tudo estiver carregado
      mapType='hybrid'// map, hybrid, mutedStandard, none, satellite, standard, terrain
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },

  map:{
    flex: 1
  },
});


export default App;
