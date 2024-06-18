import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import Search from "./screens/Search";
import CreatePost from "./screens/CreatePost";
import Profile from "./screens/Profile";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import client from "./config/apolloClient";
import { ApolloProvider } from "@apollo/client";
import Logout from "./components/Logout";
import { PaperProvider } from "react-native-paper";

/*
====public====
1. Login stack -> Register stack
====auth====
2. Home matbot <-> Search matbot <-> CreatePost matbot <-> Profile matbot

3. PostDetail stack
*/
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNav() {
  return (
    <>
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#000000",
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "Instagram",
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTitleStyle: {
            color: "#ffffff",
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="home" size={20} color="white" />
            ) : (
              <FontAwesome5 name="home" size={20} color="grey" />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: "Search",
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTitleStyle: {
            color: "#ffffff",
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="search" size={20} color="white" />
            ) : (
              <FontAwesome5 name="search" size={20} color="grey" />
            ),
        }}
      />
      <Tab.Screen
        name="Create Post"
        component={CreatePost}
        options={{
          headerTitle: "Create Post",
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTitleStyle: {
            color: "#ffffff",
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="comment-dots" size={20} color="white" />
            ) : (
              <FontAwesome5 name="comment-dots" size={20} color="grey" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: "Profile",
          headerShown: false,
          headerRight: () => <Logout />,
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTitleStyle: {
            color: "#ffffff",
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="envelope-open-text" size={20} color="white" />
            ) : (
              <FontAwesome5 name="envelope-open-text" size={20} color="grey" />
            ),
        }}
      />
    </Tab.Navigator>
    </>
    
  );
}

function AppStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainTabNav"
        component={MainTabNav}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppStackNav />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </ApolloProvider>
  );
}
