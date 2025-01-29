import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateCategoryScreen from "./CreateCategoryScreen";
import { customTheme } from "./app_theme";

import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
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
