import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { customTheme } from "./config/app_theme";
import { Provider as PaperProvider } from "react-native-paper";
import "./config/firebaseConfig";
import { AuthProvider } from "./context/AuthContext";
import AppNavigator from "./navigation/AppNavigator";

export default function MainApp() {
  return (
    <AuthProvider>
      <PaperProvider theme={customTheme}>
        <AppNavigator />
      </PaperProvider>
    </AuthProvider>
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
