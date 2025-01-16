import AddTheme from "../AddTheme/AddTheme";

export default function Themes({
  currentTheme,
  themes,
  onThemeChange,
  onAddTheme,
  onDeleteTheme,
  showDeleteConfirmation,
  confirmDelete,
  cancelDelete,
}) {
  return (
    <div className="theme-controls">
      <select
        value={currentTheme}
        onChange={(event) => onThemeChange(event.target.value)}
      >
        {Object.keys(themes).map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
      <AddTheme onAddTheme={onAddTheme} themes={themes} />
      <button onClick={onDeleteTheme} disabled={currentTheme === "Default"}>
        Delete Theme
      </button>

      {showDeleteConfirmation && (
        <div className="confirmation">
          <p>Are you sure you want to delete {currentTheme} theme?</p>
          <div className="confirmation-buttons">
            <button onClick={confirmDelete}>Yes</button>
            <button onClick={cancelDelete}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}
