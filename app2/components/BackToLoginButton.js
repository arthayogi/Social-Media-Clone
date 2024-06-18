import { Pressable, StyleSheet, Text } from "react-native"

export default function BackToLoginButton({navigation}) {
    return (
        <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
        >
        <Text style={styles.text}>Already have an account?</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0163e000",
        marginTop: 50,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 30,
        height: 50,
      },
    text: {
        color: "#5ea4ec",
        fontSize: 15
    }
})