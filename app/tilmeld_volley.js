import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native"
import Button from "../components/Button"
import { router } from "expo-router"

// Jeg ville gerne have lavet denne liste dynamisk ud fra data i en database
// Meeeeen løb lidt tør for tid såååå

export default function Tilmed() {
    return (
        <>
        <View style={styles.container}>
            <ScrollView>
                <Pressable onPress={() => router.push("/tilmelding")}>
                    <View style={styles.box}>
                        <Text style={styles.klubNavn}>Aalborg Beachvolley Klub</Text>
                        <Text style={styles.addresse}>Skydebanevej 14, 9000 Aalborg</Text>
                        <Text style={styles.tidspunkt}>Torsdage - Kl. 17:30</Text>
                        <Text style={styles.pladsholder}>Tryk mig!</Text>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.klubNavn}>Frederiksberg Volley</Text>
                        <Text style={styles.addresse}>Bülowsvej 34, 1870 Frederiksberg</Text>
                        <Text style={styles.tidspunkt}>Torsdage - Kl. 16</Text>
                        <Text style={styles.pladsholder}>Tryk mig!</Text>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.klubNavn}>Horsens VBC</Text>
                        <Text style={styles.addresse}>Sportsvænget 4, 8700 Horsens</Text>
                        <Text style={styles.tidspunkt}>Lørdage - Kl. 17</Text>
                        <Text style={styles.pladsholder}>Tryk mig!</Text>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.klubNavn}>Odense Beachvolley Klub</Text>
                        <Text style={styles.addresse}>Klokkestøbervej 3, 5000 Odense</Text>
                        <Text style={styles.tidspunkt}>Fredage - Kl. 17</Text>
                        <Text style={styles.pladsholder}>Tryk mig!</Text>
                    </View>
                </Pressable>

                <View style={styles.box}>
                    <Text style={styles.klubNavn}>Forestil dig flere</Text>
                    <Text style={styles.addresse}>Havde ikke tid til at gøre det dynamisk</Text>
                    <Text style={styles.tidspunkt}>Oops</Text>
                    <Text style={styles.pladsholder}>Tryk mig!</Text>
                </View>
            </ScrollView>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    pladsholder: {
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        color: "white"
    },
    addresse: {
        marginBottom: 5,
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
    },
    tidspunkt: {
        color: "white",
        fontSize: 14,
        marginBottom: 10,
    },
    klubNavn: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,
    },
    box: {
        marginLeft: "auto",
        marginRight: "auto",
        width: 330,
        marginTop: 30,
        backgroundColor: "#FF7F00",
        borderTopLeftRadius: 16,
        borderBottomRightRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        //alignItems: "center"
    },
})