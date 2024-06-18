import { Button, StatusBar, StyleSheet, View, TextInput, Text, Image } from "react-native";
import LoginButton from "../components/LoginButton";
import ToRegisterButton from "../components/ToRegisterButton";
// import { TextInput } from "react-native-gesture-handler";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={
          {uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png?20200512141346"}
        }
      />
      <StatusBar style="auto" />
      <TextInput style={styles.input} placeholder="Type your email" placeholderTextColor={"#6a7780"}/>
      <TextInput style={styles.input} placeholder="Type your password" placeholderTextColor={"#6a7780"}/>
      <LoginButton navigation={navigation}/>
      <Text style={styles.textForgotPassword}>Forgot password?</Text>
      <View>
      <ToRegisterButton navigation={navigation}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282f3f",
    justifyContent: "center",
  },
  input: {
    height: 60,
    borderColor: "#4a5c6a",
    borderWidth: 1,
    backgroundColor: "#1a2b33",
    color: "#ffffff",
    paddingLeft: 10,
    paddingBottom: 20,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
  },
  textForgotPassword: {
    color: "#fdfffd",
    fontSize: 15,
    textAlign: "center",
    paddingTop: 20
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 80,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 140,
    marginTop: 80
  },

});
