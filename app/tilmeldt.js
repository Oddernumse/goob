import { View, Text, StyleSheet } from "react-native"
import Button from "../components/Button"

// Smukt

export default function Tilmeldt() {
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.tak}>Tak for at tilmelde dig</Text>

            <View style={styles.footerContainer}>
                <Button path={"/"} theme="primary" label={"Gå til forside"} />
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        justifyContent: "center",
        alignItems: "center",
    },
    tak: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFF",
        marginLeft: "auto",
        marginRight: "auto"
    },
    footerContainer: {
        flexDirection: "row",
        flex: 0,
        marginRight: "auto",
        marginLeft: "auto",
        alignItems: 'center',
        shadowColor: "#FFF",
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
    },
})