import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    containerInside: {
        width: "95%",
        height: "95%",
        backgroundColor: "#6597d8",
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 20,
        justifyContent: "center",
    },
    textArea: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    title: {
        color: "#ccf49f",
        borderColor: "#000",
        fontSize: 36,
        fontWeight: "700"
    },
    iconArea: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        width: 275,
        height: 275
    },
    buttonArea: {
        alignItems: "center",
        justifyContent: "center",
        flex: 2,
    },
    button: {
        backgroundColor: "#ccf49f",
        width: 165,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "#000",
        borderWidth: 1
    },
    btnTitle: {
        fontWeight: "700",
    }
});