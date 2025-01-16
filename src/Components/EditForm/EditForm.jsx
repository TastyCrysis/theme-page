import ColorInput from "../ColorInput/ColorInput";

export default function EditForm({ color, setShowEdit, onSubmit }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const updatedColor = {
      ...color,
      ...data,
    };

    try {
      if (onSubmit) {
        await onSubmit(updatedColor);
      }
    } catch (error) {
      console.error("Error in onSubmit:", error);
    } finally {
      setShowEdit(false);
    }
  };

  return (
    <div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <label htmlFor="role" className="edit-form-label">
          Role{" "}
          <input
            className="edit-form-text-input"
            type="text"
            id="role"
            name="role"
            defaultValue={color.role}
          />
        </label>
        <label htmlFor="hex" className="edit-form-label">
          Hex <ColorInput id="hex" defaultValue={color.hex} />
        </label>
        <label htmlFor="contrastText" className="edit-form-label">
          Contrast Text{" "}
          <ColorInput id="contrastText" defaultValue={color.contrastText} />
        </label>
        <div className="edit-form-buttons">
          <button type="submit" className="edit-form-button">
            Save
          </button>
          <button
            type="button"
            onClick={() => setShowEdit(false)}
            className="edit-form-button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
