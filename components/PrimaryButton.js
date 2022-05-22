import { View, Text, Pressable, StyleSheet } from "react-native"

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.pressed, styles.container] : styles.container
        }
        android_ripple={{ color: "#F5f10D" }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 2,
    margin: 5,
    overflow: "hidden",
  },
  container: {
    backgroundColor: "#F5D10D",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 10,
  },
  buttonText: {
    color: "#020202",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
})

export default PrimaryButton
