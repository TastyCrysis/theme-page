import ColorInput from "../ColorInput/ColorInput";

export default function EditForm({ color, setShowEdit, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const updatedColor = {
      ...color,
      ...data,
    };
    if (onSubmit) {
      onSubmit(updatedColor);
    }
    setShowEdit(false);
  };

  return (
    <div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <label htmlFor="role">
          Role{" "}
          <input type="text" id="role" name="role" defaultValue={color.role} />
        </label>
        <label htmlFor="hex">
          Hex <ColorInput id="hex" defaultValue={color.hex} />
        </label>
        <label htmlFor="contrastText">
          Contrast Text{" "}
          <ColorInput id="contrastText" defaultValue={color.contrastText} />
        </label>
        <div className="edit-form-buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={() => setShowEdit(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
