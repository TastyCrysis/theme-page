import { useState } from "react";
import "./AddTheme.css";

export default function AddTheme({ onAddTheme, themes }) {
  const [isAdding, setIsAdding] = useState(false);
  const [newThemeName, setNewThemeName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!newThemeName) return;
    if (themes[newThemeName]) {
      alert("Theme name already exists!");
      return;
    }
    onAddTheme(newThemeName);
    setNewThemeName("");
    setIsAdding(false);
  }

  if (!isAdding) {
    return <button onClick={() => setIsAdding(true)}>Add New Theme</button>;
  }

  return (
    <form className="add-theme-form" onSubmit={handleSubmit}>
      <input
        className="add-theme-input"
        type="text"
        value={newThemeName}
        onChange={(event) => setNewThemeName(event.target.value)}
        placeholder="Enter theme name"
      />
      <button type="submit" className="add-theme-button">
        Confirm
      </button>
      <button
        className="add-theme-button"
        type="button"
        onClick={() => setIsAdding(false)}
      >
        Cancel
      </button>
    </form>
  );
}
