import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable, ImageBackground } from 'react-native';
import { Link } from "expo-router"

const climber = require("../assets/climby.jpg")
const volley = require("../assets/volleyball.jpg")
const tennis = require("../assets/table-tennis.jpg")

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vælg venligst en sport</Text>
      <ScrollView style={styles.ScrollView}>
          <View style={styles.imageContainer}>
            <Link replace href={{pathname: "/sports/climber"}} asChild>
              <Pressable>
                <View style={styles.imageContainer}>
                  <ImageBackground blurRadius={2} source={climber} style={styles.Image}>
                    <View style={styles.textView}>
                      <Text style={styles.textStyle}>Klatring</Text>
                    </View>
                  </ImageBackground>
                </View>
              </Pressable>
            </Link>
          </View>

          <View style={styles.imageContainer}>
            <Link replace href={{pathname: "/sports/volleyball"}} asChild>
            <Pressable>
              <View style={styles.imageContainer}>
                <ImageBackground blurRadius={2} source={volley} style={styles.Image}>
                  <View style={styles.textView}>
                    <Text style={styles.textStyle}>Volleyball</Text>
                  </View>
                </ImageBackground>
              </View>
            </Pressable>
            </Link>
          </View>

          <View style={styles.imageContainer}>
            <Link replace href={{pathname: "/sports/bordtennis"}} asChild>
            <Pressable>
              <View style={styles.imageContainer}>
                <ImageBackground blurRadius={2} source={tennis} style={styles.Image}>
                  <View style={styles.textView}>
                    <Text style={styles.textStyle}>Bordtennis</Text>
                  </View>
                </ImageBackground>
              </View>
            </Pressable>
            </Link>
          </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#FFF",
    paddingTop: 10,
    fontFamily: "monospace"
  },
  Image: {
    width: 320,
    height: 320,
    borderRadius: 18,
    resizeMode: "contain"
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 0,
    overflow: "hidden"
  },
  theImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  footerContainer: {
    flex: 1/3,
    alignItems: "center",
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
  textStyle: {
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: 32,
    color: "#FFF"
},
});
