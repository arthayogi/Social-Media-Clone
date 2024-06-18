import { StatusBar, StyleSheet, Text, View, TextInput } from "react-native";
import BackToLoginButton from "../components/BackToLoginButton";
import RegisterButton from "../components/RegisterButton";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text_1}>What's your email?</Text>
      <Text style={styles.text_2}>Enter the email where you can be contacted.</Text>
      <Text style={styles.text_2}>No one will see this on your profile.</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor={"#6a7780"}/>
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor={"#6a7780"}/>
      <RegisterButton navigation={navigation}/>
      <BackToLoginButton navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282f3f",
    justifyContent: "center",
  },
  text_1: {
    color: "#fdfffd",
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: 20,
    marginTop: 100,
    marginBottom: 10,
    paddingLeft: 15
  },
  text_2: {
    color: "#fdfffd",
    fontSize: 15,
    marginBottom: 0,
    paddingLeft: 15
  },
  input: {
    height: 60,
    borderColor: "#4a5c6a",
    borderWidth: 1,
    backgroundColor: "#1a2b33",
    color: "#ffffff",
    paddingLeft: 10,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    paddingBottom: 20
  },
});
