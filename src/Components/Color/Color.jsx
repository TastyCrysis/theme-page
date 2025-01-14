import { useState } from "react";
import ContrastChecker from "../ContrastChecker/ContrastChecker";
import EditForm from "../EditForm/EditForm";
import ConfirmForm from "../ConfirmForm/ConfirmForm";
import "./Color.css";
import useLocalStorageState from "use-local-storage-state";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

export default function Color({ color, onDelete, onEdit }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [accessibilityScore, setAccessibilityScore] = useState(null);
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
      <div className="color-info">
        <h4>{currentColor.role}</h4>
        <p>contrast: {currentColor.contrastText}</p>
      </div>
      <div className="contrast-checker">
        <p className={`result ${accessibilityScore?.className || ""}`}>
          {accessibilityScore
            ? accessibilityScore.score
            : "Overall Contrast Score: Loading..."}
        </p>
        <ContrastChecker
          color={currentColor}
          onResult={setAccessibilityScore}
        />
      </div>
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
