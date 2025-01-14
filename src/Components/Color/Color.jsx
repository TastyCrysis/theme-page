import { useState } from "react";
import EditForm from "../EditForm/EditForm";
import ConfirmForm from "../ConfirmForm/ConfirmForm";
import "./Color.css";
import useLocalStorageState from "use-local-storage-state";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
export default function Color({ color, onDelete, onEdit }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [currentColor, setCurrentColor] = useLocalStorageState(color.id, {
    defaultValue: color,
  });

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
      <div className="color-header">
        <h3 className="color-card-headline">{currentColor.hex}</h3>
        <CopyToClipboard text={currentColor.hex} />
      </div>
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
