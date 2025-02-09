import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    marginLeft: "10",
    marginRight: "10",
  },
  scrollViewContent: {
    padding: 0,
  },
  scrollFadeBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 10,
    zIndex: 1,
  },
  charCounter: {
    fontSize: 12,
    textAlign: "right",
    marginTop: 1,
    marginRight: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "20",
    textAlign: "center",
  },
  input: {
    marginBottom: 10,
    maxHeight: "60",
  },
  label: {
    fontWeight: "bold",
    marginVertical: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  iconGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  iconButton: {
    margin: 4,
  },
  colorGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  colorButton: {
    margin: 4,
    borderRadius: 12,
    height: 40,
    width: 40,
  },
  button: {
    borderRadius: 12,
  },
});

export default styles;
