import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
export default function Home({ navigation }) {
    function goToMap() {
        navigation.navigate("map")
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerInside}>
                <View style={styles.textArea}>
                    <Text style={styles.title}>
                        FIREMAP
                    </Text>
                </View>
                <View style={styles.iconArea}>
                    <Image source={require('../../assets/iconMap.png')} style={styles.icon} />
                </View>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={() => goToMap()}>
                        <Text style={styles.btnTitle}>
                            Acessar Mapa
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};