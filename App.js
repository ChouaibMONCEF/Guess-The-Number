import { StatusBar } from "expo-status-bar"
import { StyleSheet, ImageBackground } from "react-native"
import StartScreen from "./screens/StartScreen"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import GameScreen from "./screens/GameScreen"

export default function App() {
  const [userNumber, setUserNumber] = useState()

  function pickedNumber(pickedNumber) {
    setUserNumber(pickedNumber)
  }

  let screen = <StartScreen pickedNumber={pickedNumber} />

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient colors={["#000000", "#101010"]} style={styles.container}>
        <ImageBackground
          source={require("./assets/images/bg.jpg")}
          resizeMode='cover'
          style={styles.container}
          imageStyle={styles.bgImage}
        >
          {screen}
        </ImageBackground>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020202",
    // alignItems: "center",
    // justifyContent: "center",r
  },
  bgImage: {
    opacity: 0.1,
  },
})
