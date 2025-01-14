import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  const handleEdit = (updatedColor) => {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === updatedColor.id ? updatedColor : color
      )
    );
  };

  function handleSubmit(data) {
    setColors((prevColors) => [data, ...prevColors]);
  }

  function handleDeleteColor(id) {
    setColors((prevColors) => prevColors.filter((color) => color.id !== id));
  }

  function handleReset() {
    setColors(initialColors);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <button onClick={handleReset}>Reset to Default Colors</button>
      <ColorForm onSubmitColor={handleSubmit} />
      {colors.map((color) => (
        <Color
          key={color.id}
          color={color}
          onDelete={() => handleDeleteColor(color.id)}
          onEdit={handleEdit}
        />
      ))}
    </>
  );
}

export default App;
