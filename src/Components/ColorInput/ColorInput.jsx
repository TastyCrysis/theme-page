import { useState, useEffect } from "react";

export default function ColorInput({ id, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  function handleInputValue(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  return (
    <>
      <input
        type="text"
        id={id}
        name={id}
        value={inputValue}
        onChange={handleInputValue}
      />
      <input type="color" value={inputValue} onChange={handleInputValue} />
    </>
  );
}
