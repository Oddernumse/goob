import { StyleSheet, ImageBackground, Text, View } from "react-native";

export default function ImageViewer({ placeholderImageSource, renderText, blur }) {
    return (
        <ImageBackground blurRadius={blur} source={placeholderImageSource} style={styles.Image}>
            <View style={styles.textView}>
                <Text style={styles.textStyle}>{renderText}</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    Image: {
        borderRadius: 18,
        resizeMode: "contain"
    },
    textStyle: {
        fontFamily: "monospace",
        fontWeight: "bold",
        fontSize: 32,
        color: "#FFF"
    },
    textView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
});