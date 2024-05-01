import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable, Alert } from 'react-native';
import { Link } from "expo-router"

import ImageViewer from './components/ImageViewer';

const climber = require("./assets/climby.jpg")
const volley = require("./assets/volleyball.jpg")

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
          <View style={styles.imageContainer}>
            <Link replace href="/Page" asChild>
              <Pressable onPress={() => Alert.alert("BOO!")}>
                <ImageViewer placeholderImageSource={climber} renderText={"Klatring"}>
                  <View style={styles.textView}>
                    <Text>MOOOOO</Text>
                  </View>
                </ImageViewer>
              </Pressable>
            </Link>
          </View>
          <View>
            <ImageViewer placeholderImageSource={volley} renderText={"Volleyball"}>  
              <View style={styles.textView}>
                <Text>MOOOOO</Text>
              </View>
            </ImageViewer>
          </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
    paddingBottom: 10,
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
  }
});
