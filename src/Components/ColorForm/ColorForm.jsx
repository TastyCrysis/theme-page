import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#ff4a11", contrastText: "#ffffff" },
}) {
  const [key, setKey] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.id = nanoid();
    onSubmitColor(data);
    setKey((prevKey) => prevKey + 1);
  }

  useEffect(() => {
    console.log(key);
  }, [key]);

  return (
    <form key={key} onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role{" "}
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={initialData.role}
        />
      </label>
      <label htmlFor="hex">
        Hex <ColorInput id="hex" name="hex" defaultValue={initialData.hex} />
      </label>
      <label htmlFor="contrastText">
        Contrast Text{" "}
        <ColorInput
          id="contrastText"
          name="contrastText"
          defaultValue={initialData.contrastText}
        />
      </label>
      <button type="submit">Add Color</button>
    </form>
  );
}
