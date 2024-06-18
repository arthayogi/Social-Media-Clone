import { Pressable, StyleSheet, Text } from "react-native"

export default function RegisterButton({navigation}) {
    return (
        <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
        >
        <Text style={styles.text}>Register</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0163e0",
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 150,
        borderRadius: 30,
        height: 50,
      },
    text: {
        color: "#ffff",
        fontSize: 15
    }
})