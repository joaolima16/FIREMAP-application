import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';
import { styles } from './styles';
export function Map() {
    const [location, setLocation] = useState({});
    
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted'){ 
                console.log('Permissão de acesso negada');
                return;
            }
            const local = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: local.coords.latitude,
                longitude: local.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        })();
    }, []);
    
    return (
        <SafeAreaView style={styles.container}>
            <MapView style={styles.map} 
                initialRegion={location}
                showsUserLocation // mostra a posição do usuário com um pontinho
                loadingEnabled //só aparece o mapa quando tudo estiver carregado
                mapType='hybrid'// map, hybrid, mutedStandard, none, satellite, standard, terrain
            />
        </SafeAreaView>
    );
};