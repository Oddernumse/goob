import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Button({ label, theme, path }) {
    if (theme === "primary") {
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => {router.push(path)}}>
                    <Text style={styles.buttonLabel}>{label}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 128,
        height: 55,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },
    button: {
        borderRadius: 4,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        padding: 10,
        borderTopLeftRadius: 16,
        borderBottomRightRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 4,
        elevation: 3,
        backgroundColor: "#FFF",
        shadowColor: '#87ceeb',
        shadowOffset: { width: 100, height: 100 },
        shadowOpacity: 10,
        shadowRadius: 10000,
        elevation: 10,
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: "#000000",
        fontSize: 16,
    },
});
