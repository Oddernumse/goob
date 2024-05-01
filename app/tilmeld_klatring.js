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
                        <Text style={styles.klubNavn}>Esbjerg Boulderklub</Text>
                        <Text style={styles.addresse}>Strandby Kirkevej 36, 6705 Esbjerg</Text>
                        <Text style={styles.tidspunkt}>Fredage - Kl. 16</Text>
                        <Text style={styles.pladsholder}>Tryk mig!</Text>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.klubNavn}>Roskilde Klatreklub</Text>
                        <Text style={styles.addresse}>Møllehusene 16, 4000 Roskilde</Text>
                        <Text style={styles.tidspunkt}>Fredage - Kl. 16</Text>
                        <Text style={styles.pladsholder}>Tryk mig!</Text>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.klubNavn}>Aalborg Klatreklub</Text>
                        <Text style={styles.addresse}>Annebergvej 55, 9000 Aalborg</Text>
                        <Text style={styles.tidspunkt}>Fredage - Varierer</Text>
                        <Text style={styles.pladsholder}>Tryk mig!</Text>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.klubNavn}>Odense Boulderklub</Text>
                        <Text style={styles.addresse}>Grønløkkevej 4B, 5000 Odense C</Text>
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