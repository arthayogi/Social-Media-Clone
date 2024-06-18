import { StatusBar, StyleSheet, Text, View } from "react-native"

export default function PostDetail() {
    return (
        <View style={styles.container}>
        <Text>Ini page post detail</Text>
        <StatusBar style="auto" />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})