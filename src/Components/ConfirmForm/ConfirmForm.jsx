export default function ConfirmForm({ color, onDelete, setShowConfirmation }) {
  const handleConfirm = () => {
    onDelete(color.id);
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="confirmation">
      <p className="color-card-highlight">
        Are you sure you want to delete this color?
      </p>
      <div className="confirmation-buttons">
        <button className="delete-button-confirm" onClick={handleConfirm}>
          Yes
        </button>
        <button className="delete-button-cancel" onClick={handleCancel}>
          No
        </button>
      </div>
    </div>
  );
}
