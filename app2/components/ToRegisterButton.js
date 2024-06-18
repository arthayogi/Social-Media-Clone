import { Pressable, StyleSheet, Text } from "react-native"

export default function ToRegisterButton({navigation}) {
    return (
        <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
        >
        <Text style={styles.text}>Create new account</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#539dec00",
        borderColor: "#539dec",
        borderWidth: 2,
        marginTop: 100,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 30,
        height: 50,
      },
    text: {
        color: "#539dec",
        fontSize: 15
    }
})