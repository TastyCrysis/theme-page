import { useTheme } from "./hooks/useTheme";
import { useColor } from "./hooks/useColor";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import Themes from "./Components/Themes/Themes";
import "./App.css";

function App() {
  const {
    themes,
    setThemes,
    currentTheme,
    setCurrentTheme,
    handleAddTheme,
    handleDeleteTheme,
    showDeleteConfirmation,
    confirmDelete,
    cancelDelete,
  } = useTheme();

  const { handleEdit, handleSubmit, handleDeleteColor } = useColor(
    setThemes,
    currentTheme
  );

  return (
    <>
      <h1>Theme Creator</h1>
      <Themes
        currentTheme={currentTheme}
        themes={themes}
        onThemeChange={setCurrentTheme}
        onAddTheme={handleAddTheme}
        onDeleteTheme={handleDeleteTheme}
        showDeleteConfirmation={showDeleteConfirmation}
        confirmDelete={confirmDelete}
        cancelDelete={cancelDelete}
      />
      <ColorForm
        onSubmitColor={handleSubmit}
        disabled={currentTheme === "Default"}
      />
      {themes[currentTheme].length === 0 ? (
        <p className="no-color">No colors available. Please add a new color.</p>
      ) : (
        themes[currentTheme].map((color) => (
          <Color
            key={color.id}
            color={color}
            onDelete={() => handleDeleteColor(color.id)}
            onEdit={handleEdit}
            disabled={currentTheme === "Default"}
          />
        ))
      )}
    </>
  );
}

export default App;
