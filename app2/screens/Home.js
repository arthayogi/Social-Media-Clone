import {
  ActivityIndicator,
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { useQuery } from "@apollo/client";
// import { GET_POST } from "../queries/query";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const GET_DATA1 = [
  {
    username: "",
    avatar: "",
  },
];
const GET_DATA2 = [
  {
    name: "",
    profPicUrl: "",
    imageUrl: "",
    post: "",
  },
];
export default function Home({ navigation }) {
  // const { loading, error, data } = useQuery(GET_POST);
  // console.log(loading, error, data,"<<<<tes data");

  // if (loading) {
  //   return (
  //     <SafeAreaProvider>
  //       <SafeAreaView style={styles.container}>
  //         <ActivityIndicator size={"large"} />
  //       </SafeAreaView>
  //     </SafeAreaProvider>
  //   );
  // }

  // if (error) {
  //   return (
  //     <SafeAreaProvider>
  //       <SafeAreaView style={styles.container}>
  //         <Text>Something went wrong...</Text>
  //       </SafeAreaView>
  //     </SafeAreaProvider>
  //   );
  // }

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={styles.container1}>
        <Pressable
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.text1}>Instagram</Text>
        </Pressable>
        <View style={styles.icon1}>
          <FontAwesome5 name="heart" size={20} color="white" />
          <FontAwesome5 name="facebook-messenger" size={20} color="white" />
        </View>
      </View>
      <View style={styles.container2}>
        <Image
          style={styles.reels}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png?20200512141346",
          }}
        />
        <Text style={styles.username2}>Yogiyogi</Text>
        <Image
          style={styles.reels}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png?20200512141346",
          }}
        />
        <Text style={styles.username2}>Yogiyogi</Text>
        <Image
          style={styles.reels}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png?20200512141346",
          }}
        />
        <Text style={styles.username2}>Yogiyogi</Text>
      </View>
      <View style={styles.container3}>
        <View style={styles.post1}>
          <View style={styles.flex1}>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png?20200512141346",
              }}
            />
            <Text style={styles.text_username}>Yogiyogi</Text>
          </View>
          <View style={styles.flex2}>
            <Image
              style={styles.image}
              source={{
                uri: "https://i.ytimg.com/vi/U_B3FxKBoWI/maxresdefault.jpg",
              }}
            />
          </View>
          <View style={styles.flex_like}>
            <Text style={styles.text_like}>Liked by kucing02</Text>
          </View>
          <View style={styles.flex3}>
            <Text style={styles.text_username}>Yogiyogi</Text>
            <Text style={styles.text_post}>Shikanoko nokonoko koshitantan</Text>
          </View>
          <View style={styles.flex4}>
            <Text style={styles.text_comment}>View all 20 comment...</Text>
          </View>
          <View style={styles.flex5}>
            <FontAwesome5 name="heart" size={24} color="white" />
            <Ionicons name="chatbubble-outline" size={24} color="white" />
            <FontAwesome5 name="share-square" size={24} color="white" />
            <View style={styles.flex6}>
              <FontAwesome5 name="bookmark" size={24} color="white" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  container1: {
    flex: 2,
    backgroundColor: "#000000",
    fontFamily: "sans-serif-medium",
    flexDirection: "row",
    alignItems: "center",
    gap: 150,
  },
  text1: {
    fontSize: 30,
    color: "#ffffff",
  },
  text_like: {
    fontsize: 25,
    color: "#ffffff",
    marginLeft: 10,
    marginTop: 4,
  },
  text_username: {
    fontsize: 25,
    color: "#ffffff",
    marginLeft: 10,
    marginTop: 14,
    fontWeight: "bold",
  },
  text_username2: {
    fontsize: 25,
    color: "#ffffff",
    fontWeight: "bold",
  },
  text_post: {
    fontsize: 25,
    color: "#ffffff",
    marginLeft: 10,
    marginTop: 4,
  },
  text_comment: {
    color: "#ffffff",
    marginLeft: 10,
    marginTop: 4,
  },
  icon1: {
    flexDirection: "row",
    gap: 20,
  },
  container2: {
    flex: 4,
    backgroundColor: "black",
    flexDirection: "row",
  },
  container3: {
    flex: 20,
    backgroundColor: "black",
  },
  post1: {
    flex: 10,
    backgroundColor: "black",
    marginBottom: 10,
  },
  post2: {
    flex: 2,
    backgroundColor: "white",
    marginBottom: 10,
  },
  flex1: {
    flex: 2,
    backgroundColor: "black",
    flexDirection: "row",
  },
  flex2: {
    flex: 10,
    backgroundColor: "gray",
  },
  flex_like: {
    flex: 1,
    backgroundColor: "black",
  },
  flex3: {
    flex: 4,
    backgroundColor: "black",
  },
  flex4: {
    flex: 1,
    backgroundColor: "black",
  },
  flex5: {
    flex: 2,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    gap: 35,
  },
  flex6: {
    flex: 1,
    marginLeft: 135,
  },
  image: {
    width: "auto",
    height: 260,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 7,
    marginTop: 5,
  },
  reels: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginTop: 8,
    marginLeft: 10,
  },
});
