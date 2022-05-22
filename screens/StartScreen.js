import { TextInput, View, StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import { useState } from "react"

function StartScreen() {
  const [enteredNumber, setEnteredNumber] = useState("")

  function inputHandler(enteredText) {
    setEnteredNumber(enteredText)
  }

  function confirmHandler() {
      const
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={inputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#231F20",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 10,
    elevation: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 15,
    shadowOpacity: 0.5,
  },
  inputStyle: {
    margin: 5,
    height: 50,
    width: 50,
    fontSize: 25,
    borderBottomColor: "#F6E71D",
    borderBottomWidth: 2,
    color: "#F5D10D",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
})

export default StartScreen
