import useLocalStorageState from "use-local-storage-state";
import { initialColors } from "../lib/colors";
import { useState } from "react";

export function useTheme() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: { Default: initialColors },
  });
  const [currentTheme, setCurrentTheme] = useLocalStorageState("currentTheme", {
    defaultValue: "Default",
  });
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleAddTheme = (themeName) => {
    setThemes((prevThemes) => ({
      ...prevThemes,
      [themeName]: [],
    }));
    setCurrentTheme(themeName);
  };

  const handleDeleteTheme = () => {
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    if (currentTheme === "Default") return;

    setThemes((prevThemes) => {
      const newThemes = { ...prevThemes };
      delete newThemes[currentTheme];
      return newThemes;
    });
    setCurrentTheme("Default");
    setShowDeleteConfirmation(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  return {
    themes,
    setThemes,
    currentTheme,
    setCurrentTheme,
    handleAddTheme,
    handleDeleteTheme,
    showDeleteConfirmation,
    confirmDelete,
    cancelDelete,
  };
}
