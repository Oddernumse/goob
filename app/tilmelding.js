import { Text, View, StyleSheet, TextInput } from "react-native"
import Button from "../components/Button"

// Jeg ville også rigtig gerne have haft alt det her uploadet til en database
// Men igen, tid

export default function Tilmelding() {
    return (
        <>
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Udfyld venligst</Text>
            </View>

            <View>
                <Text style={styles.general}>Navn</Text>
                <TextInput style={styles.input} value={Number} keyboardType="default" />
            </View>

            <View>
                <Text style={styles.general}>Alder:</Text>
                <TextInput style={styles.input} value={Number} keyboardType="numeric"/>
            </View>

            <View>
                <Text style={styles.general}>Telefon nummer:</Text>
                <TextInput style={styles.input} value={Number} keyboardType="numeric"/>
            </View>

            <View>
                <Text style={styles.general}>Mail:</Text>
                <TextInput style={styles.input} value={Number} keyboardType="email-address"/>
            </View>
            
            <View style={styles.footerContainer}>
                <Button path={"/tilmeldt"} theme="primary" label={"Tilmeld"} />
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff"
    },
    general: {
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 20,
        paddingLeft: 10,
        color: "#fff0f5"
    },
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        //alignItems: "center"
    },
    input: {
        backgroundColor: "#ed872d",
        color: "white",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})