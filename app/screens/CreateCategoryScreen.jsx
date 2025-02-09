import React, { useState, useEffect, memo, useCallback, useMemo } from "react";
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
import styles from "./CreateCategoryScreen.styles";

const CreateCategoryScreen = () => {
  const [categoryName, setCategoryName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("account");
  const [selectedColor, setSelectedColor] = useState("#F8E5A6");

  const theme = useTheme();

  const MAX_CHARACTERS = 15;

  const ICONS = useMemo(
    () => [
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
    ],
    []
  );

  const COLORS = useMemo(
    () => [
      "#F8E5A6",
      "#FAD4A1",
      "#FFD1B3",
      "#FFB6A1",
      "#FFA3C2",
      "#E9A8D8",
      "#D9A7F1",
      "#B5B3F5",
      "#A6D4F2",
      "#99E1E5",
      "#99F7AB",
      "#C5E887",
      "#ABDF75",
      "#E5E5A6",
    ],
    []
  );

  const MemorizedIconButton = memo(
    ({ icon, selectedIcon, selectedColor, onPress }) => (
      <IconButton
        key={icon}
        icon={icon}
        size={30}
        style={[
          styles.iconButton,
          icon === selectedIcon && { backgroundColor: selectedColor },
        ]}
        onPress={() => onPress(icon)}
      />
    )
  );

  const handleColorChange = useCallback(
    (color) => {
      if (color !== selectedColor) {
        setSelectedColor(color);
      }
    },
    [selectedColor]
  );

  const handleIconChange = useCallback(
    (icon) => {
      if (icon !== selectedIcon) {
        setSelectedIcon(icon);
      }
    },
    [selectedIcon]
  );

  const handleCreateCategory = async () => {
    if (!categoryName.trim()) {
      alert("Please enter a category name!");
      return;
    }

    try {
      const response = await fetch(
        "https://andrea1997mariotti.pythonanywhere.com/categories/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: categoryName,
            icon: selectedIcon,
            color: selectedColor,
          }),
        }
      );

      console.log("Response", response);

      const data = await response.json();
      if (response.ok) {
        alert("Category Created Successfully!");
        alert("Response: " + JSON.stringify(data));
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      alert("Error connecting to backend ", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={[styles.safeArea, { backgroundColor: theme.colors.background }]}
      >
        <>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Title style={[styles.title, { color: theme.colors.text }]}>
              Create a new category
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
                roundness: 12,
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
              Select an icon
            </Text>
            <View
              style={{
                height: 250,
                overflow: "hidden",
                pointerEvents: "box-none",
              }}
            >
              <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
                keyboardShouldPersistTaps="handled"
                removeClippedSubviews={true}
              >
                <TouchableWithoutFeedback
                  onPress={() => Keyboard.dismiss()}
                  accessible={false}
                >
                  <View style={styles.iconGrid}>
                    {ICONS.map((icon) => (
                      <MemorizedIconButton
                        key={icon}
                        icon={icon}
                        selectedIcon={selectedIcon}
                        selectedColor={selectedColor}
                        onPress={handleIconChange}
                      />
                    ))}
                  </View>
                </TouchableWithoutFeedback>
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
              Select a color
            </Text>
            <View style={styles.colorGrid}>
              {COLORS.map((color) => (
                <IconButton
                  key={color}
                  {...(selectedColor === color ? { icon: "circle" } : {})}
                  size={30}
                  style={[styles.colorButton, { backgroundColor: color }]}
                  onPress={() => handleColorChange(color)}
                />
              ))}
            </View>
            <Button
              mode="contained"
              onPress={handleCreateCategory}
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

export default CreateCategoryScreen;
