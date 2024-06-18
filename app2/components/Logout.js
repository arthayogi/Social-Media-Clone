import { Button } from "react-native";

export default function Logout ({navigation}) {
    return (
        <Button 
        onPress={() => navigation.navigate("Login")}
        title="Logout"
        color="#000000"
      />
    )
}