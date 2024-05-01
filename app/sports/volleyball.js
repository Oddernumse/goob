import { Text, View, StyleSheet, ImageBackground } from "react-native"
import Button from "../../components/Button"

const volley = require("../../assets/volleyball.jpg")

export default function Climber() {
    return (
        <>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground blurRadius={0} source={volley} style={styles.Image}>
                    <View style={styles.textView}>
                        <Text></Text>
                    </View>
                </ImageBackground>
                <View style={styles.divider}>
                    <Text style={styles.title}>Volleyball</Text>
                    <Text style={styles.infoCard}>Info:</Text>

                    <Text style={styles.generalInfo}>Landets forskellige volleyball står klar med åbne arme til du kan komme og prøve det af!</Text>

                    <Text style={styles.generalInfo}>De håber på at se dig til træning engang og står klar med åbne arme</Text>
                </View>

                
                
            </View>
                
            

            <View style={styles.footerContainer}>
                <Button path={"/"} theme="primary" label={"Tilbage"} />
                <Button path={"/tilmeld_volley"} theme="primary" label={"Tilmeld"} />
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    shadowJutsu: {
        flexDirection: "row",
    },
    Address: {
        fontSize: 24,
        color: "#FFF",
        paddingTop: 35,
    },
    generalInfo: {
        paddingLeft: 0,
        fontSize: 16,
        color: "#FFF",
        paddingBottom: 10,
        marginRight: "auto",
        marginLeft: "auto",
    },
    infoCard: {
        paddingLeft: 15,
        color: "#FFF",
        paddingTop: 20,
        fontSize: 28,
        paddingBottom: 25,
    },
    title: {
        paddingLeft: 15,
        color: "#FFF",
        fontFamily: "monospace",
        fontWeight: "bold",
        paddingTop: 20,
        fontSize: 32
    },
    divider: {
        position: "relative",
        justifyContent: "space-evenly",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: -30,
        height: 320,
        width: 320,
        backgroundColor: "#FF7F00"
    },
    Image: {
        width: 468,
        height: 200,
        //aspectRatio: 3/2,
        borderRadius: 18,
        //resizeMode: "contain"
    },
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        //alignItems: "center"
    },
    imageContainer: {
        //width: 600,
        //height: 600,
        flex: 1,
        paddingBottom: 0,
        overflow: "hidden",
        //justifyContent: "center"
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