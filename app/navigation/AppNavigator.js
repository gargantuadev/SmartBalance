import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { auth } from "../config/firebaseConfig";
import LoginScreen from "../screens/LoginScreen";
import CreateCategoryScreen from "../screens/CreateCategoryScreen";
import SignupScreen from "../screens/SignUpScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return unsubscribe; // Unsubscribe on unmount
  }, [initializing]);

  if (initializing) return null; // Optionally show a loading spinner

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "CreateCategory" : "Login"}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateCategory" component={CreateCategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
