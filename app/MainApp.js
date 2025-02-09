import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateCategoryScreen from "./screens/CreateCategoryScreen";
import { customTheme } from "./config/app_theme";

import { Provider as PaperProvider } from "react-native-paper";

/*export default function MainApp() {
  return (
    <PaperProvider theme={customTheme}>
      <SafeAreaView
        style={[
          styles.safeArea,
          { backgroundColor: customTheme.colors.background },
        ]}
      >
        <View style={styles.container}>
          <CreateCategoryScreen></CreateCategoryScreen>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}*/

//import React from "react";
import AppNavigator from "./navigation/AppNavigator";
//import { Provider as PaperProvider } from "react-native-paper";
//import { customTheme } from "./config/app_theme";

export default function MainApp() {
  return (
    <PaperProvider theme={customTheme}>
      <AppNavigator />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Occupies all the screen
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
