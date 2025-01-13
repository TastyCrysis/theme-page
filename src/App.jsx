import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleSubmit(data) {
    setColors((prevColors) => [data, ...prevColors]);
  }

  function handleDeleteColor(id) {
    setColors((prevColors) => prevColors.filter((color) => color.id !== id));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleSubmit} />
      {colors.map((color) => {
        return (
          <Color key={color.id} color={color} onDelete={handleDeleteColor} />
        );
      })}
    </>
  );
}

export default App;
