import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import {
  TextInput,
  Button,
  IconButton,
  Text,
  Title,
  useTheme,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const CreateCategoryScreen = () => {
  const [categoryName, setCategoryName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("account");
  const [selectedColor, setSelectedColor] = useState("#F8E5A6");

  const theme = useTheme();

  const MAX_CHARACTERS = 15;

  const ICONS = [
    "car",
    "cart",
    "cash-multiple",
    "drama-masks",
    "hospital-box",
    "train",
    "dog-side",
    "video-vintage",
    "dumbbell",
    "parking",
    "gas-station",
    "bike",
    "bicycle-electric",
    "glass-cocktail",
    "glass-wine",
    "flower",
    "palette",
    "washing-machine",
    "diamond-stone",
    "bookshelf",
    "tie",
    "airplane",
    "food",
    "home",
    "school",
    "soccer",
    "shopping",
    "bed",
    "gift",
    "wallet",
    "music",
    "coffee",
    "paw",
  ];

  const COLORS = [
    "#F8E5A6", // Soft Pastel Yellow
    "#FAD4A1", // Light Peach
    "#FFD1B3", // Soft Apricot
    "#FFB6A1", // Gentle Coral
    "#FFA3C2", // Light Rose Pink
    "#E9A8D8", // Soft Mauve
    "#D9A7F1", // Lavender
    "#B5B3F5", // Soft Periwinkle
    "#A6D4F2", // Baby Blue
    "#99E1E5", // Aqua Cyan
    "#99F7AB", // Mint Green
    "#C5E887", // Light Lime Green
    "#ABDF75", // Pastel Green (your reference)
    "#E5E5A6", // Soft Beige-Yellow
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={[styles.safeArea, { backgroundColor: theme.colors.background }]}
      >
        <>
          <View style={{ marginLeft: "10", marginRight: "10" }}>
            <Title style={[styles.title, { color: theme.colors.text }]}>
              Create a New Category
            </Title>
            <TextInput
              label="Category name"
              placeholder="Write your category here"
              value={categoryName}
              onChangeText={(text) => {
                if (text.length <= MAX_CHARACTERS) {
                  setCategoryName(text);
                }
              }}
              mode="outlined"
              numberOfLines={1}
              maxLength={MAX_CHARACTERS}
              style={[styles.input]}
              theme={{
                roundness: 15,
                colors: {
                  text: theme.colors.text,
                  placeholder: theme.colors.text,
                },
              }}
            />
            <Text
              style={[
                styles.charCounter,
                {
                  color:
                    categoryName.length >= MAX_CHARACTERS
                      ? "red"
                      : theme.colors.text,
                },
              ]}
            >
              {categoryName.length}/{MAX_CHARACTERS} characters
            </Text>
            <Text style={[styles.label, { color: theme.colors.text }]}>
              Select an Icon
            </Text>
            <View style={{ flex: 1, position: "relative" }}>
              <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
              >
                <View style={styles.iconGrid}>
                  {ICONS.map((icon) => (
                    <IconButton
                      key={icon}
                      icon={icon}
                      size={30}
                      style={[
                        styles.iconButton,
                        icon === selectedIcon && {
                          backgroundColor: selectedColor,
                          color: theme.colors.accent,
                        },
                      ]}
                      onPress={() => setSelectedIcon(icon)}
                    />
                  ))}
                </View>
              </ScrollView>

              {/* ✅ Gradient effect at the BOTTOM */}
              <LinearGradient
                colors={["rgba(0,0,0,0)", "rgba(0, 0, 0, 0.08)"]} // Visible fade
                style={styles.scrollFadeBottom}
                pointerEvents="none"
              />
            </View>
            <Text
              style={[
                styles.label,
                { color: theme.colors.text, marginTop: 20 },
              ]}
            >
              Select a Color
            </Text>
            <View style={styles.colorGrid}>
              {COLORS.map((color) => (
                <IconButton
                  key={color}
                  {...(selectedColor === color ? { icon: "circle" } : {})}
                  size={30}
                  style={[styles.colorButton, { backgroundColor: color }]}
                  onPress={() => setSelectedColor(color)}
                />
              ))}
            </View>
            <Button
              mode="contained"
              onPress={() =>
                console.log({ categoryName, selectedIcon, selectedColor })
              }
              style={styles.button}
              theme={{ colors: { primary: theme.colors.primary } }}
            >
              Create Category
            </Button>
          </View>
        </>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

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
    height: 30, // Increased for visibility
    zIndex: 1,
  },
  charCounter: {
    fontSize: 12,
    textAlign: "right",
    marginTop: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "20",
    textAlign: "center",
  },
  input: {
    borderRadius: 15,
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
    borderRadius: 15,
    height: 40,
    width: 40,
  },
  button: {
    borderRadius: 15,
  },
});

export default CreateCategoryScreen;
