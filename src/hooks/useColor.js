export function useColor(setThemes, currentTheme) {
  const handleEdit = (updatedColor) => {
    setThemes((prevThemes) => ({
      ...prevThemes,
      [currentTheme]: prevThemes[currentTheme].map((color) =>
        color.id === updatedColor.id ? updatedColor : color
      ),
    }));
  };

  const handleSubmit = (data) => {
    setThemes((prevThemes) => ({
      ...prevThemes,
      [currentTheme]: [data, ...prevThemes[currentTheme]],
    }));
  };

  const handleDeleteColor = (id) => {
    setThemes((prevThemes) => ({
      ...prevThemes,
      [currentTheme]: prevThemes[currentTheme].filter(
        (color) => color.id !== id
      ),
    }));
  };

  return { handleEdit, handleSubmit, handleDeleteColor };
}
