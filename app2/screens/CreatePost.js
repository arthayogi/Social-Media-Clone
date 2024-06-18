import { StatusBar, StyleSheet, Text, View } from "react-native"

export default function CreatePost() {
    return (
        <View style={styles.container}>
        <Text>Ini page create post</Text>
        <StatusBar style="auto" />
      </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})