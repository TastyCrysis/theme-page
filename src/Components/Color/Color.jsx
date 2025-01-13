import { useState } from "react";
import EditForm from "../EditForm/EditForm";
import ConfirmForm from "../ConfirmForm/ConfirmForm";
import "./Color.css";

export default function Color({ color, onDelete, onEdit }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [currentColor, setCurrentColor] = useState(color);

  const handleEdit = (updatedColor) => {
    setCurrentColor(updatedColor);
    if (onEdit) {
      onEdit(updatedColor);
    }
  };

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  return (
    <div
      className="color-card"
      style={{
        background: currentColor.hex,
        color: currentColor.contrastText,
      }}
    >
      <h3 className="color-card-headline">{currentColor.hex}</h3>
      <h4>{currentColor.role}</h4>
      <p>contrast: {currentColor.contrastText}</p>
      {showEdit ? (
        <EditForm
          color={currentColor}
          setShowEdit={setShowEdit}
          onSubmit={handleEdit}
        />
      ) : showConfirmation ? (
        <ConfirmForm
          color={currentColor}
          onDelete={onDelete}
          setShowConfirmation={setShowConfirmation}
        />
      ) : (
        <div className="buttons">
          <button className="edit-button" onClick={() => setShowEdit(true)}>
            Edit
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
