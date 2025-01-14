import { useState, useEffect } from "react";

const CopyToClipboard = ({ text }) => {
  const [copyMessageVisible, setCopyMessageVisible] = useState(false);

  const handleCopyToClipboard = async () => {
    await navigator.clipboard.writeText(text);
    setCopyMessageVisible(true);
  };

  useEffect(() => {
    if (copyMessageVisible) {
      const timer = setTimeout(() => {
        setCopyMessageVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [copyMessageVisible]);

  return (
    <div>
      {copyMessageVisible ? (
        <p className="copy-confirmation">Color copied successfully!</p>
      ) : (
        <button onClick={handleCopyToClipboard} className="copy-button">
          Copy
        </button>
      )}
    </div>
  );
};

export default CopyToClipboard;
